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
                    <a href="index.html" data-type="index-link">Affiliate documentation</a>
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
                                            'data-target="#controllers-links-module-AffiliateModule-6ad7221f0e86b3a2fd57b88c50b64c3461a4343663846d322a29d141e4492c3456d851d6cdaa8453f4bd2097ecae12bceab2224244ec1471040e10b1fc475b44"' : 'data-target="#xs-controllers-links-module-AffiliateModule-6ad7221f0e86b3a2fd57b88c50b64c3461a4343663846d322a29d141e4492c3456d851d6cdaa8453f4bd2097ecae12bceab2224244ec1471040e10b1fc475b44"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AffiliateModule-6ad7221f0e86b3a2fd57b88c50b64c3461a4343663846d322a29d141e4492c3456d851d6cdaa8453f4bd2097ecae12bceab2224244ec1471040e10b1fc475b44"' :
                                            'id="xs-controllers-links-module-AffiliateModule-6ad7221f0e86b3a2fd57b88c50b64c3461a4343663846d322a29d141e4492c3456d851d6cdaa8453f4bd2097ecae12bceab2224244ec1471040e10b1fc475b44"' }>
                                            <li class="link">
                                                <a href="controllers/AffiliateController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AffiliateModule-6ad7221f0e86b3a2fd57b88c50b64c3461a4343663846d322a29d141e4492c3456d851d6cdaa8453f4bd2097ecae12bceab2224244ec1471040e10b1fc475b44"' : 'data-target="#xs-injectables-links-module-AffiliateModule-6ad7221f0e86b3a2fd57b88c50b64c3461a4343663846d322a29d141e4492c3456d851d6cdaa8453f4bd2097ecae12bceab2224244ec1471040e10b1fc475b44"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AffiliateModule-6ad7221f0e86b3a2fd57b88c50b64c3461a4343663846d322a29d141e4492c3456d851d6cdaa8453f4bd2097ecae12bceab2224244ec1471040e10b1fc475b44"' :
                                        'id="xs-injectables-links-module-AffiliateModule-6ad7221f0e86b3a2fd57b88c50b64c3461a4343663846d322a29d141e4492c3456d851d6cdaa8453f4bd2097ecae12bceab2224244ec1471040e10b1fc475b44"' }>
                                        <li class="link">
                                            <a href="injectables/AffiliateServiceFactory.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AffiliateServiceFactory</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LazadaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LazadaService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
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
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AuthModule-478c1d4794ea660b17d9e05b6327e6a54b8ffa03099091d0d36d88fb17609d3dfe2d98ee9bbc06d2d9002cd01b69e15f3b07873e4f6bc818249833eba3fcb85d"' : 'data-target="#xs-controllers-links-module-AuthModule-478c1d4794ea660b17d9e05b6327e6a54b8ffa03099091d0d36d88fb17609d3dfe2d98ee9bbc06d2d9002cd01b69e15f3b07873e4f6bc818249833eba3fcb85d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-478c1d4794ea660b17d9e05b6327e6a54b8ffa03099091d0d36d88fb17609d3dfe2d98ee9bbc06d2d9002cd01b69e15f3b07873e4f6bc818249833eba3fcb85d"' :
                                            'id="xs-controllers-links-module-AuthModule-478c1d4794ea660b17d9e05b6327e6a54b8ffa03099091d0d36d88fb17609d3dfe2d98ee9bbc06d2d9002cd01b69e15f3b07873e4f6bc818249833eba3fcb85d"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthModule-478c1d4794ea660b17d9e05b6327e6a54b8ffa03099091d0d36d88fb17609d3dfe2d98ee9bbc06d2d9002cd01b69e15f3b07873e4f6bc818249833eba3fcb85d"' : 'data-target="#xs-injectables-links-module-AuthModule-478c1d4794ea660b17d9e05b6327e6a54b8ffa03099091d0d36d88fb17609d3dfe2d98ee9bbc06d2d9002cd01b69e15f3b07873e4f6bc818249833eba3fcb85d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-478c1d4794ea660b17d9e05b6327e6a54b8ffa03099091d0d36d88fb17609d3dfe2d98ee9bbc06d2d9002cd01b69e15f3b07873e4f6bc818249833eba3fcb85d"' :
                                        'id="xs-injectables-links-module-AuthModule-478c1d4794ea660b17d9e05b6327e6a54b8ffa03099091d0d36d88fb17609d3dfe2d98ee9bbc06d2d9002cd01b69e15f3b07873e4f6bc818249833eba3fcb85d"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
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
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
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
                                <a href="classes/AccessTokenDto.html" data-type="entity-link" >AccessTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/AffiliateRouteConst.html" data-type="entity-link" >AffiliateRouteConst</a>
                            </li>
                            <li class="link">
                                <a href="classes/CredentialDto.html" data-type="entity-link" >CredentialDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAccessTokenQuery.html" data-type="entity-link" >GetAccessTokenQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetAccessTokenQueryHandler.html" data-type="entity-link" >GetAccessTokenQueryHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetProductSeedInfoQuery.html" data-type="entity-link" >GetProductSeedInfoQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetProductSeedInfoQueryHandler.html" data-type="entity-link" >GetProductSeedInfoQueryHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserProfileQuery.html" data-type="entity-link" >GetUserProfileQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserProfileQueryHandler.html" data-type="entity-link" >GetUserProfileQueryHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProductSeedInfoDto.html" data-type="entity-link" >ProductSeedInfoDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserProfileDto.html" data-type="entity-link" >UserProfileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidatedUserDto.html" data-type="entity-link" >ValidatedUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidateUserRequestQuery.html" data-type="entity-link" >ValidateUserRequestQuery</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidateUserRequestQueryHandler.html" data-type="entity-link" >ValidateUserRequestQueryHandler</a>
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
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LazadaService.html" data-type="entity-link" >LazadaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
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