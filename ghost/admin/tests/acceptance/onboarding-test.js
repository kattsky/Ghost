import {authenticateSession} from 'ember-simple-auth/test-support';
import {currentURL, find, visit} from '@ember/test-helpers';
import {describe, it} from 'mocha';
import {enableLabsFlag} from '../helpers/labs-flag';
import {enableMembers} from '../helpers/members';
import {expect} from 'chai';
import {setupApplicationTest} from 'ember-mocha';
import {setupMirage} from 'ember-cli-mirage/test-support';

describe('Acceptance: Onboarding', function () {
    const hooks = setupApplicationTest();
    setupMirage(hooks);

    beforeEach(async function () {
        this.server.loadFixtures('configs');
        this.server.loadFixtures('settings');
        this.server.loadFixtures('themes');

        enableLabsFlag(this.server, 'onboardingChecklist');
        enableMembers(this.server);
    });

    describe('checklist (owner)', function () {
        beforeEach(async function () {
            let role = this.server.create('role', {name: 'Owner'});
            this.server.create('user', {roles: [role], slug: 'owner'});
            return await authenticateSession();
        });

        it('dashboard shows the checklist', async function () {
            await visit('/dashboard');
            expect(currentURL()).to.equal('/dashboard');

            // main onboarding list is visible
            expect(find('[data-test-dashboard="onboarding-checklist"]'), 'checklist').to.exist;

            // other default dashboard elements get hidden
            expect(find('[data-test-dashboard="header"]'), 'header').to.not.exist;
            expect(find('[data-test-dashboard="attribution"]'), 'attribution section').to.not.exist;
        });
    });

    describe('checklist (non-owner)', function () {
        beforeEach(async function () {
            let role = this.server.create('role', {name: 'Administrator'});
            this.server.create('user', {roles: [role], slug: 'admin'});
            return await authenticateSession();
        });

        it('dashboard doesn\'t show the checklist', async function () {
            await visit('/dashboard');
            expect(currentURL()).to.equal('/dashboard');

            // onboarding isn't shown
            expect(find('[data-test-dashboard="onboarding-checklist"]'), 'checklist').to.not.exist;

            // other default dashboard elements are visible
            expect(find('[data-test-dashboard="header"]'), 'header').to.exist;
            expect(find('[data-test-dashboard="attribution"]'), 'attribution section').to.exist;
        });
    });
});
