-- kubernetes command --
[Refrence for kubernetes api !](https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.21/)
# Depoloyment Command
> Deployment description .
   Deployemnt manages the pod.
   * pod containe docker container  
   deployment are used
   1. To redeploy when any pod fail
   2. To create more instance of pod
## get deployment
```
kubectl get deployemnt
```
## create depolyment
```
kubectl apply -f= filename
kubectl delete -f= filename
```
# kubernetes Service
> create service && delete
```
kubectl apply -f= filename
kubectl delete -f= filename
```
> get services
```
kubectl get service

```
> get pod instance && describe
```
kubectl get pod 
kubectl describe pods
```
> To run project in local machine with minikube 
```
minikube service <name of service!>
```
> impotant Notes about Services

__ If container in same pod we can use __
###localhost 
If container is in diffrent pod then we can use ClusterIP : which is provided in kubectl get service
or we can use name space 
<service name.default>
to get namespace
```
kubectl get namespace
```
