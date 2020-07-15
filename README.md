## install / deploy

```
npm i
sls deploy -v
<turn on tracing via console>
```

## run

```
# <ServiceEndpoint> is from sls Stack Output, above
curl --location --request POST '<ServiceEndpoint>/startWorkflow'