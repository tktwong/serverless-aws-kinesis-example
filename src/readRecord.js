const readRecord = (event, _, callback) => {
  const kinesisRecords = event.Records || [];
  kinesisRecords.forEach(item => {
    console.log(`partitionKey: ${item.kinesis.partitionKey}`);
    console.log(`kinesisSchemaVersion: ${item.kinesis.kinesisSchemaVersion}`);
    console.log(`data: ${Buffer(item.kinesis.data, 'base64').toString('ASCII')}`);
    console.log(`eventSource: ${item.eventSource}`);
    console.log(`eventID: ${item.eventID}`);
    console.log(`invokeIdentityArn: ${item.invokeIdentityArn}`);
    console.log(`eventVersion: ${item.eventVersion}`);
    console.log(`eventName: ${item.eventName}`);
    console.log(`eventSourceARN: ${item.eventSourceARN}`);
    console.log(`eventVersion: ${item.eventVersion}`);
  });
  if (kinesisRecords) {
    // console.log('Retrieved Records', JSON.stringify(kinesisRecords));
    callback(null, kinesisRecords);
  }
  callback(null);
}

export default readRecord;
