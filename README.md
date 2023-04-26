## Download PDF reports from Klarna Merchant Portal
Scripts for downloading statements/settlements receipts in bulk from Klarna's website when they won't give you API keys.

# Usage
  1) Log into Klarna merchant, go to settlements, search the range you want (skip their very annoying calendar UI and enter the date range in the URL)
  2) open your modern browsers console (f12), and simply paste the contents of the relevant script and run it (hit enter).
  3) Files will download.

## Contents
- `klarna_download_settlement_pdfs_new.js`: Download PDF Settlement Statements from Klarna's new website, when they refuse to give you API keys.
   Simply search for any range you want, then run this script in the console, and it will download each individual settlement statement as a PDF. 
   Goodluck with bookkeeping!

Let me know if you want ones that work on the old (KO) interface, but I decided I might as well put up my scripts for the new klarna UI here.
These scripts are here because my SaaS webstore does not give me the API keys, and Klarna does not allow multiples, and resetting it from Klarna would break the websote.
When it's time to bookkeep, I would need to download tons of settlement pdfs.

Whenever their UI changes, it is easy to modify these to adjust.
