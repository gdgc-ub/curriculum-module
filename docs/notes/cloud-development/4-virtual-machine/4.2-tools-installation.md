# Tools Installation

## Virtual Box

![img](../../../public/assets/cloud-development/your-first-vm/vbox-download.png)

1. To download virtual box, you can visit [VirtualBox Download Link](https://www.virtualbox.org/wiki/Downloads) and then the above image will show up.
2. Choose platform package based on your PC operating system and then click the download link. 
    - If your PC OS is MacOS but with Intel CPU, then choose macOS/Intel hosts
    - If your PC OS is MacOS but with Apple Sillicon CPU, then choose macOS/Apple Sillicon hosts
3. After the process of downloading installer is done, launch the installer by clicking the file, it will show up like this
![img](../../../public/assets/cloud-development/your-first-vm/step1.jpg)
4. Click next and agree to ToA
5. Here you can change the software location or leave as it is
![img](../../../public/assets/cloud-development/your-first-vm/step2.jpg)
6. If the below warning shows up, just proceed with the installation and click yes
![img](../../../public/assets/cloud-development/your-first-vm/step3.jpg)
7. If the installer says "Missing Dependancies Python Core / win32 api", then you can download and install python first through [this link](https://www.python.org/downloads/release/python-3127/) then add python installation directory to the path variable by accessing it through system environment variables. For more clarity, you can watch the guide in this [youtube video](https://www.youtube.com/watch?v=91SGaK7_eeY) or just ask us in the whatsapp group
![img](../../../public/assets/cloud-development/your-first-vm/step4.jpg)
8. Then check if python is already installed or not by running the following command in your terminal
```zsh
python --version
```
It should show up like this
![img](../../../public/assets/cloud-development/your-first-vm/python-check.png)
9. Then we need to install python win32 api by running the following command  in your terminal
```zsh
pip install pywin32
```
![img](../../../public/assets/cloud-development/your-first-vm/step5.jpg)
10. If everything went well, close the virtualbox installer then run the installer again, click next and choose the software location, then after that, there should be no more warning missing dependancies and it should show this instead
![img](../../../public/assets/cloud-development/your-first-vm/step6.jpg)
11. Just hit next and tadaaa, virtualbox is already installed in your computer! 🥳
![img](../../../public/assets/cloud-development/your-first-vm/step8.jpg)
12. Launch the virtualbox software and horayy, we are done with virtualbox 🎉
![img](../../../public/assets/cloud-development/your-first-vm/step9.jpg)

## Ubuntu Server 

![img](../../../public/assets/cloud-development/your-first-vm/ubuntu-download.png)

1. To download ubuntu server ISO, you can visit [Ubuntu Sever ISO Download Link](https://ubuntu.com/download/server) and the above image will show up.
2. Click the green download button and it will begin downloading the Ubuntu Server ISO
![img](../../../public/assets/cloud-development/your-first-vm/notify-ubuntu-download.png)
3. If the process of download ubuntu server iso is done, we will begin create our virtual machine