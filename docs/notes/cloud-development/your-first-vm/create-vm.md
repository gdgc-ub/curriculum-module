# Create Virtual Machine

Congratulations! you are on half way having your first virtual machine. Now let's begin actually really creating virtual machine using VirtualBox. 

However since we are trying to create virtual computer inside our computer, i strongly advised to have the recommended requirements to ensure everything will go smooth and quick. If you don't have the minimum requirement, you can still follow the guides with albeit a little or major lag will interrupt you.

Recommended Specification Requirements
- CPU : 4 Cores
- RAM : 8GB
- Storage : Have atleast 10GB free storage and SSD

## Setup Virtual Machine with VirtualBox

1. Open your virtualbox and press the new button
![img](../../../public/assets/cloud-development/your-first-vm/create-1.png)

2. Fill your virtual machine name and choose the iso image. Use the ubuntu server iso you already downloaded from the previous session.
![img](../../../public/assets/cloud-development/your-first-vm/create-2.png)
![img](../../../public/assets/cloud-development/your-first-vm/create-3.png)
![img](../../../public/assets/cloud-development/your-first-vm/create-4.png)

3. Open the unattended install tab and fill the username and password as you wish. Also don't forget to remember the username and password because ofcourse we need that credential to login to the virtual computer. Change the hostname also until you see green check (means you're good to go).
![img](../../../public/assets/cloud-development/your-first-vm/create-5.png)

4. Open the hardware tab and configure the cores (processors) and memory suitable with your PC specs. Make sure it's still within green bar range.
![img](../../../public/assets/cloud-development/your-first-vm/create-6.png)

5. Open the hard disk tab and configure the storage size as you wish. Make sure you have the free space according to your configuration.
![img](../../../public/assets/cloud-development/your-first-vm/create-7.png)

6. Then click finish and it should instantly bootup the VM. If not you can click the start button.
![img](../../../public/assets/cloud-development/your-first-vm/create-8.png)

7. Choice the "try and install ubuntu server" 
![img](../../../public/assets/cloud-development/your-first-vm/create-9.png)

8. Thou shall not worry when dozens of words that you don't understand shows up. It just means you're on the right track! The installation proceess time depends on your computer specification. If it's potato, it will take a very long time so be patient!
![img](../../../public/assets/cloud-development/your-first-vm/create-10.png)

9. If everything went smooth and well, it should ask you to login. Use the previous username and password that you already filled when creating virtual machine.

![img](../../../public/assets/cloud-development/your-first-vm/create-12.png)

10. Congratulations 👏! You just created your first virtual machine 🥳!
![img](../../../public/assets/cloud-development/your-first-vm/create-13.png)



## Access VM From Host

Now that we have our virtual machine ready to use, we want to remote access the virtual machine by using [SSH](https://www.techtarget.com/searchsecurity/definition/Secure-Shell) even though it's hosted locally inside our computer. The main reason is for convenience and flexibility. Remote access allows you to interact with the VM without switching back and forth between the host and the VM interface. It also simulates a real-world scenario where we usually connect to servers remotely from our personal computers rather than having to go to the physical location of the server to run commands directly. 

To remote access our virtual machine, there are a couple things we need to do.

1. Enable openssh client

    ::: tip
    MacOS and Linux users can skip this step since their OS already includes openssh client by default.
    :::

    First we need to enable openssh client in our personal computer.  In windows, you can do that by go to settings. Then search for "optional features"

    ![img](../../../public/assets/cloud-development/your-first-vm/ssh1.jpg)

    Then search for "Add an optional features" and click the "View features" button

    ![img](../../../public/assets/cloud-development/your-first-vm/ssh2.jpg)

    Checklist the openssh-client and click next and add.

    ![img](../../../public/assets/cloud-development/your-first-vm/ssh3.jpg)

    If it's done installing the openssh-client, open your host terminal and type

    ```zsh
    ssh -V
    ```

    It should show the ssh version like this
    ![img](../../../public/assets/cloud-development/your-first-vm/ssh4.png)    

2. Install openssh-server in virtual machine

    Open your virtual machine interface again and make sure it's connected to the internet by running the following command in your virtual machine

    ```zsh
    ping google.com -c 5
    ```

    If it doesn't show you "request time out" or it shows something like the below image, your vm is already connected to the internet, otherwise you can ask in whatsapp groupchat.

    ![img](../../../public/assets/cloud-development/your-first-vm/ssh5.png)    

    Then install openssh-server with the following command in your virtual macine

    ```zsh
    sudo apt-get install openssh-server -y
    ```

    It should prompt you to enter the password. Fill the password and click enter.

    ![img](../../../public/assets/cloud-development/your-first-vm/ssh6.png)    

    Enable the openssh daemons by running the following command in your virtual machine

    ```zsh
    sudo systemctl enable --now ssh
    ```

    Verify if the openssh-server is already running by typing this command. It should show you the service is active (running)

    ```zsh
    sudo systemctl status ssh
    ```

    ![img](../../../public/assets/cloud-development/your-first-vm/ssh7.png)    

3. Configure VM Network

    Open your virtualbox interface, then click the virtual machine you just created and click the settings button.

    ![img](../../../public/assets/cloud-development/your-first-vm/ssh8.png)    

    Click the network tab and click port forwarding button.

    ![img](../../../public/assets/cloud-development/your-first-vm/ssh9.png)    

    Add port forwarding rules by clicking the green plus button, then for the host port we fill with 2210 and for the guest port we fill with 22. It means our host port (2210) will forward traffic to the guest port (22). Our host is our actual personal computer and the guest is the virtual machine. Port 22 is the default port for SSH, so services inside the VM are already configured to listen on this port as you can see from the previous images, theres something like "Server listening on :: port 22".

    ![img](../../../public/assets/cloud-development/your-first-vm/ssh10.png)    

    Click OK and then OK again.

4. Remote Access with SSH

    Now finally open your host terminal and type the following command. The -p flag specify the port. If we don't include that flag, it will use the default value which is 22

    ```zsh
    ssh [YOUR VM USERNAME]@localhost -p 2210
    ```

    ![img](../../../public/assets/cloud-development/your-first-vm/ssh11.png)    

**CONGRATULATIONS 🥳** You just learned how to remote access your virtual machine with SSH
