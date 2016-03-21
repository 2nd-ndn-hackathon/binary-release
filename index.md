---
layout: page
title: NFD Binary Release
---

## Team Members ##

- Alex Afanasyev (UCLA)
- Eric Newberry (The University of Arizona)
- Susmit Shannigrahi (Colorado State University)
- Yingdi Yu (UCLA)

## Problem Statement ##

Binary releases of NFD are currently only available on some systems. Even on the systems where there are binaries available, they may be out of date. Thus, we attempted to develop packaging scripts for multiple platforms. The binaries would be accompanied by the NFD Control Center.

In addition, NFD Control Center has not been updated in a while and could be improved by adding various features, including 

## Approaches ##

Alex and Yingdi worked on a script to build an OS X bundle containing the NDN platform (ndn-cxx, NFD, ndn-tools, and NFD Control Center).

Susmit worked on a status display for NFD Control Center.

Eric worked on a port of NDN to natively compile on Windows.

## What Works ##

NFD Control Center is now able to configure the security environment of the NDN platform on OS X.

A script was written to create a bundle containing the NDN platform (ndn-cxx, NFD, ndn-tools, and NFD Control Center).

## What Doesn't Work ##

Efforts to compile ndn-cxx natively on Windows were not successful.

The status display is not functional as of the end of the hackathon.

## TODOs ##

 - Integration of NFD Control Center with ndncert.
 - Add a status display to NFD Control Center.

## Screenshots ##
