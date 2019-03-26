Vagrant.configure(2) do |config|
  config.vm.box = "ubuntu/trusty64"
  config.vm.network :forwarded_port, guest: 4574, host: 4574
  config.vm.provider "virtualbox" do |vb|
    vb.name = "xcl-codemo"
    vb.memory = "2048"
  end

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
