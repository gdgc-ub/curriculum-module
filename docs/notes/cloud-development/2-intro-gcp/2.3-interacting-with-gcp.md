# Interacting with Google Cloud Services

Now that we know serveral services provided by GCP, how do we interact with them? Fortunately, Google Cloud gives us three basic ways to interact with the services and resources.

## Google Cloud Console

![img](https://cloud.google.com/static/docs/images/overview/console.png)

The Google Cloud console provides a web-based, graphical user interface that you can use to manage your Google Cloud projects and resources. When you use the Google Cloud console, you either create a new project or choose an existing project, and then use the resources that you create in the context of that project.

## Command Line Interface

![img](https://cloud.google.com/static/shell/docs/images/used-console-with-editor.png)

You can also perform most Google Cloud tasks by using the Google Cloud CLI. The gcloud CLI lets you manage development workflow and Google Cloud resources in a terminal window. If you are one of those who codes in vim rather than any other code editors, you might prefer this one. 

For example, you can create a Compute Engine virtual machine (VM) instance by running the 
```zsh
gcloud compute instances create 
```
command in the shell environment.

You can run gcloud commands in the following ways:

- You can install the Google Cloud CLI. The gcloud CLI lets you open a terminal window on your own computer and run commands to manage Google Cloud resources.

- You can use Cloud Shell, which is a browser-based shell. Because it runs in a browser window, you don't need to install anything on your own computer. You can open the Cloud Shell from the Google Cloud console.

For a list of gcloud commands, see the [gcloud reference](https://cloud.google.com/sdk/gcloud/reference).

## Client Libraries

Google Cloud provides client libraries that enable you to easily create and manage resources. Google Cloud client libraries expose APIs for two main purposes:

- App APIs provide access to services. App APIs are optimized for supported languages, such as Node.js and Python. The libraries are designed around service metaphors, so you can work with the services more naturally and write less boilerplate code. The libraries also provide helpers for authentication and authorization.

- Admin APIs offer functionality for resource management. For example, you can use admin APIs if you want to build your own automated tools.

You also can use the Google API client libraries to access APIs for products such as Google Maps, Google Drive, and YouTube.