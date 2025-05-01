## Virtual service

In XCube the “virtual service” is simply the built-in RPC layer that lets one module call another (or call itself) without ever doing an HTTP/SOAP round-trip. Under the hood:

1. Service Definition  
   You build up a service–and its operations–by instantiating an `XCube_Service` object and registering methods
   on it, via `addFunction()` or `register()`. That lives in PHP memory.

2. Service Manager  
   `XCube_ServiceManager` holds all of your `XCube_Service` instances. When you ask it for a client:

```php
<?php
$client = XCube_Root::getSingleton()
            ->mServiceManager
            ->createClient($myService);
```

it fires the delegate `XCube_ServiceManager.CreateClient`  
If there’s no SOAP/WSDL adapter hooked in, your default listener hands back a virtual client, an `XCube_ServiceClient` or `XCube_AbstractServiceClient`

3. Virtual Client  
   That client’s `call($operation,$params)` does not open a network connection—instead it:   
  - Swaps in a temporary `XCube_GenericRequest` with your `$params`  
  - `call_user_func([$service,$operation])` directly in the same PHP process  
  - Restores the original request object  
    So it “seems” exactly like an RPC call to your method, but it’s just PHP function dispatch.

4. Where it’s used

  - Core & modules that need to expose or consume RPC-style APIs internally
  - Any place you’d otherwise spin up a SOAP/REST bridge, but want the zero-overhead local path
  - You’ll see it wired up in `core/XCube_ServiceManager.class.php` (delegates for CreateClient/CreateServer) and in `core/XCube_ServiceClient.class.php`

**Example**  

Say your “Foo” module defines a service:

```php
<?php
$svc = new XCube_Service();
$svc->addFunction('getBar',['id'=>'int'],['bar'=>'array']);
XCube_Root::getSingleton()->mServiceManager->addService('foo',$svc);
```

Elsewhere you grab a client and do:

```php
<?php
$client = XCube_Root::getSingleton()
           ->mServiceManager
           ->createClient($svc);
$result = $client->call('getBar',['id'=>123]);
```

That `call()` executes `FooService::getBar(123)` in-process—your “virtual service.”
If you do install a SOAP or REST adapter plugin (hooking the same delegate), you can swap to true networked calls without changing your business code.

XOOPSCube calls this cross-site API layer its “Service” or “Virtual Service” model. In practice you:

1. Expose your module as a service on Site A

```php
<?php
// modules/foo/service.php
$svc = new XCube_Service();
$svc->addFunction('getItem',['id'=>'int'],['item'=>'array']);
XCube_Root::getSingleton()
    ->mServiceManager
    ->addService('foo', $svc);
```

If you install the SOAP adapter, you’d also expose a WSDL at something like
`https://siteA/modules/foo/service.php?wsdl`

2. Consume it from Site B by registering that WSDL and getting a client

```php
<?php
$sm = XCube_Root::getSingleton()->mServiceManager;
// Point to the remote WSDL on Site A
$sm->addWSDL('remoteFoo','https://siteA/modules/foo/service.php?wsdl');
$remoteSvc = $sm->getService('remoteFoo');
$client    = $sm->createClient($remoteSvc);
// Now call it just like a local function
$result = $client->call('getItem',['id'=>42]);
print_r($result['item']);
```

– If no SOAP/REST adapter is installed on Site B it’ll fall back to a virtual service (in-process RPC) when the service lives on the same site; but when you register an external WSDL, `createClient()` hands you a real SOAP client under the hood, so your code doesn’t change whether you’re calling Site A or Site B.

That’s how XCube lets one module communicate with another in XOOPSCube or websites seamlessly.