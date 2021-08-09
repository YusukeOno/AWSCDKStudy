# AWSCDKStudy
Studying is fun for me. AWS Cloud Development Kit

## Command

```
docker run --rm -it -p 3000:3000 -v `pwd`:/data node:16 bash
```

### Toolkit commands

cf. https://docs.aws.amazon.com/cdk/latest/guide/cli.html
cf. https://docs.aws.amazon.com/cdk/api/latest/typescript/api/index.html

#### Bootstrap (Only the first time.)
```
cdk bootstrap \
--profile admin-role
```

#### Initialize

```
cdk init sample-app \
--language typescript
```

#### Deploy

```
cdk diff \
--profile admin-role
```

```
cdk synth \
--profile admin-role
```

```
cdk deploy \
--profile admin-role
```

#### Destroy

```
cdk destroy sample-app \
--profile admin-role
```
