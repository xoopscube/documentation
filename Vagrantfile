Vagrant.configure(2) do |config|
  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "ubuntu/trusty64"

  # Disable automatic box update checking.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # NOTE: This will enable public access to the opened port
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # config.vm.network :forwarded_port, guest: 4574, host: 4574

  # Create a forwarded port mapping which allows access to a specific port
  # via 127.0.0.1 to disable public access
  # config.vm.network "forwarded_port", guest: 80, host: 8080, host_ip: "127.0.0.1"

  config.vm.network "forwarded_port", guest: 4574, host: 4574, host_ip: "127.0.0.1"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"


  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"


  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.

  config.vm.provider "virtualbox" do |vb|
    # Name of the VirtualBox machine
    vb.name = "xcl-codemo"

    # Display the VirtualBox GUI when booting the machine
    #   vb.gui = true

    # If you needed more cpu's you could use:
    #   vb.cpus = 2

    # Customize the amount of memory on the VM:
    vb.memory = "2048"
  end

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.

  config.vm.provision "bootstrap",
    type: "shell",
    inline: <<-SHELL
      sudo apt-add-repository ppa:brightbox/ruby-ng
      sudo apt-get update
      sudo apt-get install -yq ruby2.4 ruby2.4-dev
      sudo apt-get install -yq pkg-config build-essential nodejs git libxml2-dev libxslt-dev
      sudo apt-get autoremove -yq
      gem2.4 install --no-ri --no-rdoc bundler
    SHELL

  # add the local user git config to the vm
  config.vm.provision "file", source: "~/.gitconfig", destination: ".gitconfig"

  config.vm.provision "install",
    type: "shell",
    privileged: false,
    inline: <<-SHELL
      echo "=============================================="
      echo "Installing XCL-Codemo app dependencies"
      cd /vagrant
      bundle config build.nokogiri --use-system-libraries
      bundle install
    SHELL

  config.vm.provision "run",
    type: "shell",
    privileged: false,
    run: "always",
    inline: <<-SHELL
      echo "=============================================="
      echo "Starting up XCL-Codemo app at http://localhost:4574"
      echo "If it does not come up, check the ~/middleman.log file for any error messages"
      cd /vagrant
      bundle exec middleman server --watcher-force-polling --watcher-latency=1 &> ~/middleman.log &
    SHELL
end
