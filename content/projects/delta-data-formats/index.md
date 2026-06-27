---
title: Delta Data Formats Benchmarking
date: 2026-06-01
summary: Comparing CSV, Parquet, and Delta Lake using PySpark and Databricks.
tags:
  - PySpark
  - Databricks
  - Delta Lake
  - Parquet
  - Azure
links:
  - type: site
    url: https://github.com/HAMm-CODE/Data-Intensive-Programming/blob/main/Data_formats/README.md
---

A PySpark project built in Databricks to benchmark CSV, Parquet, and Delta Lake across realistic data engineering workflows.

## What I built

- Ingested source CSV data from Azure Blob Storage into Databricks.
- Compared storage formats: CSV, Parquet, and Delta Lake.
- Evaluated read/write behavior, storage footprint, and schema evolution.
- Documented why Delta Lake is useful for more reliable and maintainable data pipelines.

## Why this matters

Data engineers often need to choose the right storage format for performance, reliability, and long-term maintenance. This project shows practical understanding of modern data lake formats and Spark-based processing.

## Tech stack

PySpark, Databricks, Delta Lake, Parquet, Azure Blob Storage.
