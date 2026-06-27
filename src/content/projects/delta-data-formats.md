---
title: Delta Data Formats Benchmarking
description: A PySpark and Databricks project comparing CSV, Parquet, and Delta Lake for read/write performance, storage footprint, and schema evolution behavior.
publishDate: 'Jun 20 2026'
isFeatured: true
---

## Overview

This project compares common data lake storage formats using PySpark in a Databricks-style workflow. The goal was to understand how **CSV**, **Parquet**, and **Delta Lake** behave when processing evolving datasets.

## Problem

Data engineers often need to choose a file format before a pipeline is production-ready. The wrong choice can affect performance, storage cost, schema handling, and long-term maintainability.

## What I built

- Ingested source CSV data into Databricks from Azure Blob Storage.
- Built PySpark pipelines to process and transform the dataset.
- Benchmarked CSV, Parquet, and Delta Lake outputs.
- Compared storage footprint and query behavior.
- Explored Delta Lake schema evolution behavior for changing datasets.

## Tech stack

**PySpark · Databricks · Delta Lake · Parquet · CSV · Azure Blob Storage**

## What this project demonstrates

- Distributed data processing with Spark.
- Practical data format comparison.
- Basic cloud data ingestion.
- Awareness of schema evolution and reliable lakehouse design.

## Links

- [GitHub repository](https://github.com/HAMm-CODE/Data-Intensive-Programming/blob/main/Data_formats/README.md)
