---
sidebar_position: 1
position: 1
---
# Discovery

New data catalogs added from existing collections of data catalogs and data portals and using common search engines like Google, Bing and special data search engines.

## How to find data catalog by country

Most countries have country-level a top-level domain (TLD). For example United Kingdom TLD is .uk or Moldova TLD is .md. It's quite common that most data portals related to country's organizations and government are subdomains. For example, UK government data portal is data.gov.uk and Poland national data portal is dane.gov.pl.

The easiest way to find open data portals and catalogs per country is using Google search for "open data" keywords with "site:.tld". For example, searching for Czech open data portals "open data site:cz".

But not every country have English translation of open data initiatives so words "open data" aren't effective all of the time. 

### Common Google search patterns

* "site:tld/dataset" - helps to find CKAN instances since most CKAN installations linked to domain, not subdir. For example https://data.gov.sk/dataset matches pattern "site:sk/dataset"
* "site:tld/browse" - helps to find Socrata commercial data catalogs installations. For example, https://data.nasa.gov/browse  Could generate a lot of false positives, require manual review.
* "site:tld/explore" - helps to find OpenDataSoft commercial data catalogs installations. For example, https://data.lakemac.com.au/explore/ Could generate a lot of false positives, require manual review. 
* "site:tld/"

