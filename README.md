# twilio-sms-delete

A node.js utility to iteratively delete Twilio records of SMS and MMS.

```bash
./twilio-media-delete --sid [your Twilio SID] --auth [your Twilio Auth Token]
./twilio-sms-delete --sid [your Twilio SID] --auth [your Twilio Auth Token]
```

## Installation
The following recommended installation requires [npm](https://npmjs.org/). If you are unfamiliar with npm, see the [npm docs](https://npmjs.org/doc/). Npm comes installed with Node.js since node version 0.8.x therefore you likely already have it.

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
./twilio-media-delete --sid [your Twilio SID] --auth [your Twilio Auth Token]
./twilio-sms-delete --sid [your Twilio SID] --auth [your Twilio Auth Token]
```

The `twilio-media-delete` script will then loop through all SMS it can see using the Twilio API, deleting each message's media (if it has any).

The `twilio-sms-delete` will then delete the messages themselves (these scripts are separated to both solve race condition issues as well as make it easier for people that only want to remove media xor texts.

**Note:** this will not delete media items that have already had their parent message deleted -- as far as I know, there's no way to find and/or delete orphaned media (and as such, it remains publically accesible forever...). This only deletes media that have an SMS to find them by.

## License

Licensed under the MIT License.
