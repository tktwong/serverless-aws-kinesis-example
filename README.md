# ⚡ serverless-aws-kinesis-example


### Prerequisites

1. Configure `~/.aws/credentials`
2. Run following installation

```
$ npm install -g serverless
$ npm install -g kinesalite
```

3. Also don't forget to:

```
$ npm install
```

## Offline start

```
$ kinesalite
$ sls offline start --region <region> --stage <stage>
```

## Create stream
```
aws --endpoint-url http://localhost:4567/ kinesis create-stream --stream-name=serverless-kinesis-aws-example-MyKinesisName --shard-count=1
```

## Feed stream
```
aws --endpoint-url http://localhost:4567/ kinesis put-record --stream-name serverless-kinesis-aws-example-MyKinesisName --partition-key orders --data 'streaming data'
```

## Built With

* [Serverless](https://github.com/serverless/serverless) - The Serverless Framework
* [Webpack](https://github.com/webpack/webpack) - A bundler for javascript and friends

## Contributing

All contributions are welcome :)

## Authors

iamtktwong@gmail.com

