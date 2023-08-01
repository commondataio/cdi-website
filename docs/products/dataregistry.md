---
sidebar_position: 1
position: 1
---
# Data catalogs registry

Current status: 
Website https://registry.commondata.io

This is the registry of data portals, data catalogs, data repositories.


This product is part of Common Data Index products family and the first pillar of the open search engine project. 

Other pillars include:
* **registry of all catalogs** (this one)
* datasets raw metadata database
* unified dataset search index and search engine
* datasets backup and file cache

## What kind of data catalogs collected?

This registry includes description of the following data catalogs:
* Open data portals
* Geoportals
* Scientific data repositories
* Indicators catalogs
* Microdata catalogs
* Machine learning catalogs
* Data search engines
* API Catalogs
* Data marketplaces
* Metadata catalogs
* Other 

## Inspiration

This project inspired by Re3Data and Fairsharing projects. Key difference is the focus on open data as a broad topic, not just open research data.


## API and data

Following datasets available:
* [Refined dataset](https://github.com/commondataio/dataportals-registry/raw/main/data/datasets/catalogs.jsonl) - original refined registry with almost all metadata set. 
* [Scheduled dataset](https://github.com/commondataio/dataportals-registry/raw/main/data/datasets/scheduled.jsonl) - registry of data catalogs with almost no metadata and that require automated or manual update
* [Full dataset](https://github.com/commondataio/dataportals-registry/raw/main/data/datasets/full.jsonl) - merged database of scheduled and refined registry of data

API Endpoints:
* there is no yet list of datasets as API since you could download it directly as dataset
* please use API as https://registry.commondata.io/catalog/{uid}.json to access record of a single catalog by uid as JSON. Example, https://registry.commondata.io/catalog/cdi00000002.json




