const { Component, Mixin } = Shopware;
import template from './epoq-api-test-button.html.twig';

Component.register('epoq-api-test-button', {
    template,

    props: ['label'],
    inject: ['epoqApiTest'],

    mixins: [
        Mixin.getByName('notification')
    ],

    data() {
        return {
            isLoading: false,
            isSaveSuccessful: false,
        };
    },

    computed: {
        pluginConfig() {
            let $parent = this.$parent;

            while ($parent.actualConfigData === undefined) {
                $parent = $parent.$parent;
            }

            return $parent.actualConfigData.null;
        }
    },

    methods: {
        saveFinish() {
            this.isSaveSuccessful = false;
        },

        check() {
            this.isLoading = true;
            this.epoqApiTest.check(this.pluginConfig['EpoqPersonalization.config.tenantId']).then((res) => {
                if (res.status === 200) {
                    this.isSaveSuccessful = true;
                    this.createNotificationSuccess({
                        title: this.$tc('epoq-api-test-button.title'),
                        message: this.$tc('epoq-api-test-button.success')
                    });
                } else {
                    this.createNotificationError({
                        title: this.$tc('epoq-api-test-button.title'),
                        message: this.$tc('epoq-api-test-button.error')
                    });
                }

                this.isLoading = false;
            });
        }
    }
})