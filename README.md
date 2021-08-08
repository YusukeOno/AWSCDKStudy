# AWSCDKStudy
Studying is fun for me. AWS Cloud Development Kit

## Command

```
docker run --rm -it -p 3000:3000 -v `pwd`:/data node:16 bash
```

### Toolkit commands

cf. https://docs.aws.amazon.com/cdk/latest/guide/cli.html

```
cdk init sample-app \
--language typescript
```

```
cdk synth \
--profile admin-role
```

```
cdk bootstrap \
--profile admin-role
```

```
cdk deploy \
--profile admin-role
```

```
cdk destroy CdkWorkshopStack \
--profile admin-role
```
