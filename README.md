# twilio-sms-delete

A node.js utility to iteratively delete Twilio records of SMS and MMS.

```bash
./twilio-delete --sid=[your Twilio SID] --auth=[your Twilio Auth Token]
```

## Installation

Clone this repository:

```bash
git clone https://github.com/jkingsman/twilio-sms-delete.git
```

Install the necessary dependencies:

```bash
npm install
```

## Usage

```bash
./twilio-delete --sid=[your Twilio SID] --auth=[your Twilio Auth Token]
```

The `twilio-delete` script will loop through all SMS it can see using the Twilio API, deleting each message's media (if it has any), then deleting the message. **It deletes 1000 at a time, so you may need to run the script more than once to clear everything.**

**Note:** this will not delete media items that have already had their parent message deleted -- as far as I know, there's no way to find and/or delete orphaned media (and as such, it remains publically accessible forever...). This only deletes media that have an SMS to find them by.

## License

Licensed under the MIT License.
