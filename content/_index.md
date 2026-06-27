---
title: ''
summary: ''
date: 2026-06-27
type: landing

sections:
  - block: resume-biography-3
    content:
      username: me
      text: ''
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: About
        education: Education
        interests: Focus Areas
    design:
      background:
        gradient_mesh:
          enable: true
      name:
        size: md
      avatar:
        size: medium
        shape: circle

  - block: markdown
    content:
      title: 'Building practical data engineering projects'
      subtitle: ''
      text: |-
        I am building a portfolio around real data engineering work: extracting data, transforming it with Python and PySpark, storing it in reliable formats, and documenting the decisions behind each pipeline.

        My current focus is junior data engineering work involving **Python**, **SQL**, **PySpark**, **Databricks**, **Delta Lake**, **ETL/ELT**, and **cloud storage**.
    design:
      columns: '1'

  - block: collection
    id: projects
    content:
      title: Featured Projects
      text: 'A small selection of projects showing ETL, Spark, streaming, and data format work.'
      filters:
        folders:
          - projects
    design:
      view: card
      columns: 3

  - block: markdown
    content:
      title: 'Open to opportunities'
      subtitle: ''
      text: |-
        I am open to junior data engineering roles, internships, thesis-related industry projects, and collaborations involving data pipelines, Spark, Databricks, cloud data platforms, and analytics engineering.
    design:
      columns: '1'
---
