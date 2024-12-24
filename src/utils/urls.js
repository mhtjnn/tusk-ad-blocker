/**
 * TUSK AdBlocker Browser Extension
 * https://www.ghostery.com/
 *
 * Copyright 2017-present TUSK AdBlocker GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0
 */

import { debugMode } from './debug.js';

export const GHOSTERY_DOMAIN = debugMode ? 'ghosterystage.com' : 'ghostery.com';
