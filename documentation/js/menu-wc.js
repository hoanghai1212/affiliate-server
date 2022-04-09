'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">affiliate-server documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AffiliateModule.html" data-type="entity-link" >AffiliateModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AffiliateModule-e343fd5b6fc8788f9e32b45570983ce61050e632da7d00d13f34456d1ca6ca50707e15ae4cd662084704926a6cfa518015ef8e989bb3f6dec4674d33687f6d47"' : 'data-target="#xs-controllers-links-module-AffiliateModule-e343fd5b6fc8788f9e32b45570983ce61050e632da7d00d13f34456d1ca6ca50707e15ae4cd662084704926a6cfa518015ef8e989bb3f6dec4674d33687f6d47"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AffiliateModule-e343fd5b6fc8788f9e32b45570983ce61050e632da7d00d13f34456d1ca6ca50707e15ae4cd662084704926a6cfa518015ef8e989bb3f6dec4674d33687f6d47"' :
                                            'id="xs-controllers-links-module-AffiliateModule-e343fd5b6fc8788f9e32b45570983ce61050e632da7d00d13f34456d1ca6ca50707e15ae4cd662084704926a6cfa518015ef8e989bb3f6dec4674d33687f6d47"' }>
                                            <li class="link">
                                                <a href="controllers/AffiliateController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AffiliateModule-e343fd5b6fc8788f9e32b45570983ce61050e632da7d00d13f34456d1ca6ca50707e15ae4cd662084704926a6cfa518015ef8e989bb3f6dec4674d33687f6d47"' : 'data-target="#xs-injectables-links-module-AffiliateModule-e343fd5b6fc8788f9e32b45570983ce61050e632da7d00d13f34456d1ca6ca50707e15ae4cd662084704926a6cfa518015ef8e989bb3f6dec4674d33687f6d47"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AffiliateModule-e343fd5b6fc8788f9e32b45570983ce61050e632da7d00d13f34456d1ca6ca50707e15ae4cd662084704926a6cfa518015ef8e989bb3f6dec4674d33687f6d47"' :
                                        'id="xs-injectables-links-module-AffiliateModule-e343fd5b6fc8788f9e32b45570983ce61050e632da7d00d13f34456d1ca6ca50707e15ae4cd662084704926a6cfa518015ef8e989bb3f6dec4674d33687f6d47"' }>
                                        <li class="link">
                                            <a href="injectables/AffiliateServiceFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateServiceFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LazadaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LazadaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/ShopeeService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShopeeService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TikiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TikiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#controllers-links"' :
                                'data-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AffiliateController.html" data-type="entity-link" >AffiliateController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Affiliate.html" data-type="entity-link" >Affiliate</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateRouteConst.html" data-type="entity-link" >AffiliateRouteConst</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetProductSeedInfoQuery.html" data-type="entity-link" >GetProductSeedInfoQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetProductSeedInfoQueryHandler.html" data-type="entity-link" >GetProductSeedInfoQueryHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductSeedInfoDto.html" data-type="entity-link" >ProductSeedInfoDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AffiliateServiceFactory.html" data-type="entity-link" >AffiliateServiceFactory</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LazadaService.html" data-type="entity-link" >LazadaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ShopeeService.html" data-type="entity-link" >ShopeeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TikiService.html" data-type="entity-link" >TikiService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IAffiliateService.html" data-type="entity-link" >IAffiliateService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});