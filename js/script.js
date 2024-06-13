
// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Hai Tran
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Get API info.
 */

async function showCountry() {
  try {
    const resultJSON = await fetch("https://apiv3.iucnredlist.org/api/v3/country/list?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee")
    const jsonData = await resultJSON.json()
    const randomNumber = Math.floor(Math.random() * 251) + 1
    const countryName = jsonData["results"][randomNumber]["country"]
    const countryIsocode = jsonData["results"][randomNumber]["isocode"]
    document.getElementById("result").innerHTML = "The random country is " + countryName + " and its ISO code is " + countryIsocode
  } catch (error) {
    console.error(error)
  }
}
