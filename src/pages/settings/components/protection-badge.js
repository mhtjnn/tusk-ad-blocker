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

export default {
  blocked: false,
  render: ({ blocked }) => html`
    <template layout="block">
      ${blocked
        ? html`
            <settings-badge type="info">
              <ui-icon name="block-s"></ui-icon>
              Blocked
            </settings-badge>
          `
        : html`
            <settings-badge type="info">
              <ui-icon name="trust-s"></ui-icon>
              Trusted
            </settings-badge>
          `}
    </template>
  `,
};
