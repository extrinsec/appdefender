import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
// import styles from "./styles.module.css";
const TITLE = "Team";
const DESCRIPTION = "Awesome people working";

function adaptArnToFriendlyRegionName(arn) {
  switch (true) {
    case arn.includes('us-east-1'):
      return 'US East (N. Virginia)'
    case arn.includes('us-east-2'):
      return 'US East (Ohio)'
    case arn.includes('us-west-1'):
      return 'US West (N. California)'
    case arn.includes('us-west-2'):
      return 'US West (Oregon)'
    case arn.includes('ca-central-1'):
      return 'Canada (Central)'
    case arn.includes('eu-central-1'):
      return 'Europe (Frankfurt)'
    case arn.includes('eu-central-2'):
      return 'Europe (Zurich)'
    case arn.includes('eu-west-1'):
      return 'Europe (Ireland)'
    case arn.includes('eu-west-2'):
      return 'Europe (London)'
    case arn.includes('eu-west-3'):
      return 'Europe (Paris)'
    case arn.includes('eu-north-1'):
      return 'Europe (Stockholm)'
    case arn.includes('eu-south-1'):
      return 'Europe (Milan)'
    case arn.includes('eu-south-2'):
      return 'Europe (Spain)'
    case arn.includes('ap-south-1'):
      return 'Asia Pacific (Mumbai)'
    case arn.includes('ap-south-2'):
      return 'Asia Pacific (Hyderabad)'
    case arn.includes('ap-northeast-1'):
      return 'Asia Pacific (Tokyo)'
    case arn.includes('ap-northeast-2'):
      return 'Asia Pacific (Seoul)'
    case arn.includes('ap-northeast-3'):
      return 'Asia Pacific (Osaka)'
    case arn.includes('ap-southeast-1'):
      return 'Asia Pacific (Singapore)'
    case arn.includes('ap-southeast-2'):
      return 'Asia Pacific (Sydney)'
    case arn.includes('ap-southeast-3'):
      return 'Asia Pacific (Jakarta)'
    case arn.includes('ap-southeast-4'):
      return 'Asia Pacific (Melbourne)'
    case arn.includes('sa-east-1'):
      return 'South America (São Paulo)'


    default:
      return 'unmapped region'
  }
}

function adaptArnToRowHTML(arn) {
  return `
    <tr>
      <td>${adaptArnToFriendlyRegionName(arn)}</td>
      <td>${arn}</td>
    </tr>
  `
}

function adaptX86ToHTML(response) {
  const rows = response.split('\n');
  let html = '';

  for (const row of rows) {
    if (row.includes('Appdefender:')) { // we have an x86 row. EX: arn:aws:lambda:ca-central-1:996975104561:layer:Extrinsec-Appdefender:8
      html += adaptArnToRowHTML(row);
    }
  }

  return html;
}

function adaptARM64ToHTML(response) {
  const rows = response.split('\n');
  let html = '';

  for (const row of rows) {
    if (row.includes('arm64')) { // we have an x86 row. EX: arn:aws:lambda:ca-central-1:996975104561:layer:Extrinsec-Appdefender:8
      html += adaptArnToRowHTML(row);
    }
  }

  return html;
}

function Team() {
  // fetch('https://s3.amazonaws.com/ci-cdn.extrinsec.net/appdefender/aws-extension-versions.txt').then(response =>response.text().then(function (text) {
  //   // do something with the text response
  //   console.warn('stuff',text)
  // }))
  fetch('https://s3.amazonaws.com/ci-cdn.extrinsec.net/appdefender/aws-extension-versions.txt')
        .then(response => response.text())
        .then(response => {
          document.getElementById('id-tbody-x86-64').innerHTML = adaptX86ToHTML(response);
          document.getElementById('id-tbody-arm64').innerHTML = adaptARM64ToHTML(response);
        });

        return (
        <Layout title="AppDefender AWS Lambda Extension Versions" description="list of all AppDefender aws lambda extension versions for both x86/64 and arm64">
          <div class="container">
            <div class="row" style={{
                justifyContent: 'center',
                textAlign: 'center',
                marginTop: '30px',
                fontWeight: 300,
                fontSize: '40px',
              }}>
                AppDefender AWS Lambda Extension Versions
            </div>
            <div class="row" style={{
              marginTop: '20px',
                // display: 'flex',
                justifyContent: 'left',
                alignItems: 'top',
                height: '30px',
              }}>
            </div>
            {/* <div class="row">
              <div class="col col--12">
                <div class="row-fun">
                  <h3>x86-64 Platform</h3>
                </div>
              </div>
            </div> */}

            <div class="row">
              <div class="col col--6">
                <div>
                  <h3>x86-64 Platform</h3>
                </div>
                <div class="col-demo" style={{fontSize: '16px', fontWeight: 400, color: '#767676'}}>
                  When you add the extension as a layer to your Lambda, you must specify an ARN.
                  Choose an ARN from the following table that corresponds with the AWS Region where you created the Lambda.
                  These ARNs are for Lambda functions developed for the <b>x86-64 platform</b>.
                </div>
                <table style={{marginTop: '24px'}}>
                  <thead>
                    <tr>
                      <th colSpan={3} style={{textAlign: 'left'}} >AppDefender Version 0.4.1</th>
                    </tr>
                    <tr>
                      <th>Region</th>
                      <th>ARN</th>
                    </tr>
                  </thead>
                  <tbody id="id-tbody-x86-64">
                    <tr style={{height: '12px', textAlign: 'center'}}>
                      <td colSpan={2}>
                      loading data...
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="col col--6">
                <div>
                  <h3>ARM64 Platform</h3>
                </div>
                <div class="col-demo" style={{fontSize: '16px', fontWeight: 400, color: '#767676'}}>
                  When you add the extension as a layer to your Lambda, you must specify an ARN.
                  Choose an ARN from the following table that corresponds with the AWS Region where you created the Lambda.
                  These ARNs are for Lambda functions developed for the <b>x86-64 platform</b>.
                </div>
                <table style={{marginTop: '24px'}}>
                  <thead>
                    <tr>
                      <th colSpan={3} style={{textAlign: 'left'}} >AppDefender Version 0.4.1</th>
                    </tr>
                    <tr>
                      <th>Region</th>
                      <th>ARN</th>
                    </tr>
                  </thead>
                  <tbody id="id-tbody-arm64">
                    <tr style={{height: '12px', textAlign: 'center'}}>
                      <td colSpan={2}>
                      loading data...
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="row">
              <div class="col col--6">

              </div>
              <div class="col col--6">

              </div>
            </div>

            {/* <div class="row">
              <div class="col col--6">
                <table style={{marginTop: '24px'}}>
                  <thead>
                    <tr>
                      <th colSpan={3} style={{textAlign: 'left'}} >AppDefender Version 0.4.1</th>
                    </tr>
                    <tr>
                      <th>Region</th>
                      <th>ARN</th>
                    </tr>
                  </thead>
                  <tbody id="id-tbody-x86-64">
                    <tr style={{height: '12px', textAlign: 'center'}}>
                      <td colSpan={2}>
                      loading data...
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="col col--6">
                <table style={{marginTop: '24px'}}>
                  <thead>
                    <tr>
                      <th colSpan={3} style={{textAlign: 'left'}} >AppDefender Version 0.4.1</th>
                    </tr>
                    <tr>
                      <th>Region</th>
                      <th>ARN</th>
                    </tr>
                  </thead>
                  <tbody id="id-tbody-arm64">
                    <tr style={{height: '12px', textAlign: 'center'}}>
                      <td colSpan={2}>
                      loading data...
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> */}
          </div>
        </Layout>)

}

export default Team;