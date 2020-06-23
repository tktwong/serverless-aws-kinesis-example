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

## Create stream
```
$ kinesalite
$ aws --endpoint-url http://localhost:4567/ kinesis create-stream --stream-name=serverless-kinesis-aws-example-Kinesis-dev --shard-count=1
```

## Offline start

```
$ sls offline start --region <region> --stage <stage>
```

## Rest call
```
curl --location --request POST 'http://localhost:3000/dev/records ' \
--header 'Content-Type: application/json' \
--data-raw '{
    "data": "streaming data..."
}'
```

## Feed stream
```
aws --endpoint-url http://localhost:4567/ kinesis put-record --stream-name serverless-kinesis-aws-example-Kinesis-dev --partition-key orders --data 'c3RyZWFtaW5nIGRhdGE='
```

## Built With

* [Serverless](https://github.com/serverless/serverless) - The Serverless Framework
* [Webpack](https://github.com/webpack/webpack) - A bundler for javascript and friends

## Contributing

All contributions are welcome :)

## Authors

iamtktwong@gmail.com

