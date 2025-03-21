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

import { html } from 'hybrids';
import { GHOSTERY_DOMAIN } from '/utils/urls.js';

import disabled from '../illustrations/disabled.js';

const TERMS_AND_CONDITIONS_URL = `https://www.${GHOSTERY_DOMAIN}/privacy/ghostery-terms-and-conditions?utm_source=gbe&utm_campaign=onboarding`;

export default {
  render: () => html`
    <template layout="block">
      <ui-card data-qa="view:skip">
        <section layout="block:center column gap:2">
          <div layout="row center">${disabled}</div>
          <ui-text type="display-s" color="danger-500">
            TUSK Privacy is installed with limited functionality
          </ui-text>
          <ui-text type="body-m">
            TUSK Privacy Tracker & Ad Blocker is naming the trackers present
            websites you visit. You are browsing the web unprotected.
          </ui-text>
        </section>
      </ui-card>
      <ui-text layout="block:center margin:3:0" underline>
        <a href="${TERMS_AND_CONDITIONS_URL}" target="_blank">
          Terms & Conditions
        </a>
      </ui-text>
    </template>
  `,
};
