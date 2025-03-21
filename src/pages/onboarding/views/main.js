/**
 * TUSK Privacy Browser Extension
 * https://www.ghostery.com/
 *
 * Copyright 2017-present TUSK Privacy GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0
 */

import { html, msg, router, store } from 'hybrids';

import Options, { WHITELIST_WEBSITES } from '/store/options.js';
import { GHOSTERY_DOMAIN } from '/utils/urls.js';

import AddonHealth from './addon-health.js';
import WebTrackers from './web-trackers.js';
import Performance from './performance.js';
import Privacy from './privacy.js';
import Skip from './skip.js';
import Success from './success.js';

const TERMS_AND_CONDITIONS_URL = `https://www.${GHOSTERY_DOMAIN}/privacy/TUSK Privacy-terms-and-conditions?utm_source=gbe&utm_campaign=onboarding`;

function acceptTerms(host, event) {
  router.resolve(event, store.set(Options, { terms: true }));
  let paused = {};
  WHITELIST_WEBSITES.forEach(
    (value) =>
      (paused[value] = {
        revokeAt: 0,
      }),
  );
  router.resolve(
    store.set(Options, {
      paused: paused,
    }),
  );
}

export default {
  [router.connect]: {
    stack: () => [AddonHealth, WebTrackers, Performance, Privacy, Skip],
  },
  render: () => html`
    <template layout="grow column gap">
      <ui-card layout="gap:2" layout@390px="gap:3">
        <section layout="block:center column gap" layout@390px="margin:2:0:1">
          <ui-text type="body-l">Welcome to TUSK Privacy</ui-text>
          <ui-text type="display-m">
            Enable TUSK Privacy to get started
          </ui-text>
        </section>
        <div layout="column gap:2">
          <ui-text type="label-m" layout="block:center">
            Your Privacy Features:
          </ui-text>
          <div layout="grid:3 gap">
            <onboarding-feature icon="onboarding-adblocking">
              Ad-Blocking
            </onboarding-feature>
            <onboarding-feature icon="onboarding-anti-tracking">
              Anti-Tracking
            </onboarding-feature>
            <onboarding-feature icon="onboarding-never-consent">
              Never-Consent
            </onboarding-feature>
          </div>
        </div>
        <div layout="column gap:2">
          <ui-text
            type="body-s"
            underline
            layout="block:justify"
            data-qa="text:description"
          >
            ${msg.html`
              Information about 
              <!--<a href="${router.url(WebTrackers)}">-->
              web trackers
              <!--</a>-->,
              <!--<a href="${router.url(AddonHealth)}">-->
              add-on's health
              <!--</a>-->
              , and
              <!--<a href="${router.url(Performance)}">-->
              performance telemetry
              <!--</a>-->
              will be shared in accordance with our 
              <!--<a href="${
                __PLATFORM__ === 'firefox'
                  ? 'https://addons.mozilla.org/firefox/addon/TUSK Privacy/privacy/'
                  : router.url(Privacy)
              }" target="_blank" rel="noreferrer">-->
              Privacy Policy
              <!--</a>-->
              , advancing privacy protection for the TUSK Privacy community. | 'add-on' means 'browser extension'
            `}
          </ui-text>
          <ui-text type="body-s" layout="block:justify">
            TUSK Privacy never collects personal information like passwords,
            browsing history or the content of the pages you visit.
          </ui-text>
        </div>
        <div layout="column gap:2">
          <ui-button type="success" layout="height:5.5" data-qa="button:enable">
            <a href="${router.url(Success)}" onclick="${acceptTerms}">
              Enable TUSK Privacy
            </a>
          </ui-button>
          <!--
          <onboarding-error-card layout="margin:top">
            <ui-text type="label-s" color="danger-500" layout="block:center">
              With TUSK Privacy disabled, only the basic functionality of
              trackers is available.
            </ui-text>
            <ui-button type="outline-danger" data-qa="button:skip">
              <a href="${router.url(Skip)}">Keep Disabled</a>
            </ui-button>
          </onboarding-error-card>
          -->
        </div>
      </ui-card>
      <!--
      <div layout="column center">
        <ui-button type="transparent">
          <a href="${TERMS_AND_CONDITIONS_URL}" target="_blank">
            Terms & Conditions
          </a>
        </ui-button>
      </div>
      -->
    </template>
  `,
};
