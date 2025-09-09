
    window._currentDevice = 'mobile';
    window.Parameters = window.Parameters || {
        HomeUrl: 'http://app.multiscreensite.com/site/f4b2f065',
        AccountUUID: '4776e8988f734dd1a3b9d2424e202bb1',
        SystemID: 'US_DIRECT_PRODUCTION',
        SiteAlias: 'f4b2f065',
        SiteType: atob('RFVEQU9ORQ=='),
        PublicationDate: 'Tue Jul 22 16:50:25 UTC 2025',
        ExternalUid: null,
        IsSiteMultilingual: false,
        InitialPostAlias: '',
        InitialPostPageUuid: '',
        InitialDynamicItem: '',
        DynamicPageInfo: {
            isDynamicPage: false,
            base64JsonRowData: 'null',
        },
        InitialPageAlias: 'home',
        InitialPageUuid: '8ce091a409ef45559bc5ffeeab01ac93',
        InitialPageId: '37899515',
        InitialEncodedPageAlias: 'aG9tZQ==',
        InitialHeaderUuid: 'ebb4ef42e4c7444f91f064073483fa96',
        CurrentPageUrl: '',
        IsCurrentHomePage: true,
        AllowAjax: false,
        AfterAjaxCommand: null,
        HomeLinkText: 'Back To Home',
        UseGalleryModule: false,
        CurrentThemeName: 'Layout Theme',
        ThemeVersion: '500000',
        DefaultPageAlias: '',
        RemoveDID: true,
        WidgetStyleID: null,
        IsHeaderFixed: false,
        IsHeaderSkinny: false,
        IsBfs: true,
        StorePageAlias: 'null',
        StorePagesUrls: 'e30=',
        IsNewStore: 'false',
        StorePath: '',
        StoreId: 'null',
        StoreVersion: 0,
        StoreBaseUrl: '/site/f4b2f065?preview=true&dm_device=mobile&dm_exportSite=true&nossl&dm_exportSite_protected=6bea46a7_1757414438529_5_17db971bb2fa13e4793a000396c31185b6f865a338c73504a05f62ea776c90fb',
        StoreCleanUrl: true,
        StoreDisableScrolling: true,
        IsStoreSuspended: false,
        HasCustomDomain: true,
        SimpleSite: false,
        showCookieNotification: true,
        cookiesNotificationMarkup: ' <div>Wykorzystujemy pliki cookie, aby zapewni\u0107 jak najwy\u017Csz\u0105 jako\u015B\u0107 korzystania z naszej witryny. Aby dowiedzie\u0107 si\u0119 wi\u0119cej, przejd\u017A do strony Prywatno\u015B\u0107.<\/div> \n',
        translatedPageUrl: '',
        isFastMigrationSite: false,
        sidebarPosition: 'NA',
        currentLanguage: 'pl',
        currentLocale: 'pl',
        NavItems: '{}',
        errors: {
            general: 'There was an error connecting to the page.<br/> Make sure you are not offline.',
            password: 'Incorrect name/password combination',
            tryAgain: 'Try again'
        },
        NavigationAreaParams: {
            ShowBackToHomeOnInnerPages: true,
            NavbarSize: 5,
            NavbarLiveHomePage: 'http://app.multiscreensite.com/site/f4b2f065',
            BlockContainerSelector: '.dmBody',
            NavbarSelector: '#dmNav:has(a)',
            SubNavbarSelector: '#subnav_main'
        },
        hasCustomCode: true,
        planID: '7',
        customTemplateId: 'null',
        siteTemplateId: 'null',
        productId: 'DM_DIRECT',
        disableTracking: false,
        pageType: 'FROM_SCRATCH',
        isRuntimeServer: true,
        isInEditor: false,
        hasNativeStore: false,
        defaultLang: 'pl',
        hamburgerMigration: null,
        isFlexSite: false
    };

    window.Parameters.LayoutID = {};
    window.Parameters.LayoutID[window._currentDevice] = 22;
    window.Parameters.LayoutVariationID = {};
    window.Parameters.LayoutVariationID[window._currentDevice] = 5;


    window.SystemID = 'US_DIRECT_PRODUCTION';

    if (!window.dmAPI) {
        window.dmAPI = {
            registerExternalRuntimeComponent: function () {
            },
            getCurrentDeviceType: function () {
                return window._currentDevice;
            },
            runOnReady: (ns, fn) => {
                const safeFn = dmAPI.toSafeFn(fn);
                ns = ns || 'global_' + Math.random().toString(36).slice(2, 11);
                const eventName = 'afterAjax.' + ns;

                if (document.readyState === 'complete') {
                    $.DM.events.off(eventName).on(eventName, safeFn);
                    setTimeout(function () {
                        safeFn({
                            isAjax: false,
                        });
                    }, 0);
                } else {
                    window?.waitForDeferred?.('dmAjax', () => {
                        $.DM.events.off(eventName).on(eventName, safeFn);
                        safeFn({
                            isAjax: false,
                        });
                    });
                }
            },
            toSafeFn: (fn) => {
                if (fn?.safe) {
                    return fn;
                }
                const safeFn = function (...args) {
                    try {
                        return fn?.apply(null, args);
                    } catch (e) {
                        console.log('function failed ' + e.message);
                    }
                };
                safeFn.safe = true;
                return safeFn;
            }
        };
    }

    if (!window.requestIdleCallback) {
        window.requestIdleCallback = function (fn) {
            setTimeout(fn, 0);
        }
    }


/**
 * There are a few <link> tags with CSS resource in them that are preloaded in the page
 * in each of those there is a "onload" handler which invokes the loadCSS callback
 * defined here.
 * We are monitoring 3 main CSS files - the runtime, the global and the page.
 * When each load we check to see if we can append them all in a batch. If threre
 * is no page css (which may happen on inner pages) then we do not wait for it
 */
(function () {
  let cssLinks = {};
  function loadCssLink(link) {
    link.onload = null;
    link.rel = "stylesheet";
    link.type = "text/css";
  }
  
    function checkCss() {
      const pageCssLink = document.querySelector("[id*='CssLink']");
      const widgetCssLink = document.querySelector("[id*='widgetCSS']");

        if (cssLinks && cssLinks.runtime && cssLinks.global && (!pageCssLink || cssLinks.page) && (!widgetCssLink || cssLinks.widget)) {
            const storedRuntimeCssLink = cssLinks.runtime;
            const storedPageCssLink = cssLinks.page;
            const storedGlobalCssLink = cssLinks.global;
            const storedWidgetCssLink = cssLinks.widget;

            storedGlobalCssLink.disabled = true;
            loadCssLink(storedGlobalCssLink);

            if (storedPageCssLink) {
                storedPageCssLink.disabled = true;
                loadCssLink(storedPageCssLink);
            }

            if(storedWidgetCssLink) {
                storedWidgetCssLink.disabled = true;
                loadCssLink(storedWidgetCssLink);
            }

            storedRuntimeCssLink.disabled = true;
            loadCssLink(storedRuntimeCssLink);

            requestAnimationFrame(() => {
                setTimeout(() => {
                    storedRuntimeCssLink.disabled = false;
                    storedGlobalCssLink.disabled = false;
                    if (storedPageCssLink) {
                      storedPageCssLink.disabled = false;
                    }
                    if (storedWidgetCssLink) {
                      storedWidgetCssLink.disabled = false;
                    }
                    // (SUP-4179) Clear the accumulated cssLinks only when we're
                    // sure that the document has finished loading and the document 
                    // has been parsed.
                    if(document.readyState === 'interactive') {
                      cssLinks = null;
                    }
                }, 0);
            });
        }
    }
  

  function loadCSS(link) {
    try {
      var urlParams = new URLSearchParams(window.location.search);
      var noCSS = !!urlParams.get("nocss");
      var cssTimeout = urlParams.get("cssTimeout") || 0;

      if (noCSS) {
        return;
      }
      if (link.href && link.href.includes("d-css-runtime")) {
        cssLinks.runtime = link;
        checkCss();
      } else if (link.id === "siteGlobalCss") {
        cssLinks.global = link;
        checkCss();
      } 
      
      else if (link.id && link.id.includes("CssLink")) {
        cssLinks.page = link;
        checkCss();
      } else if (link.id && link.id.includes("widgetCSS")) {
        cssLinks.widget = link;
        checkCss();
      }
      
      else {
        requestIdleCallback(function () {
          window.setTimeout(function () {
            loadCssLink(link);
          }, parseInt(cssTimeout, 10));
        });
      }
    } catch (e) {
      throw e
    }
  }
  window.loadCSS = window.loadCSS || loadCSS;
})();


    /* usage: window.getDeferred(<deferred name>).resolve() or window.getDeferred(<deferred name>).promise.then(...)*/
    function Def() {
        this.promise = new Promise((function (a, b) {
            this.resolve = a, this.reject = b
        }).bind(this))
    }

    const defs = {};
    window.getDeferred = function (a) {
        return null == defs[a] && (defs[a] = new Def), defs[a]
    }
    window.waitForDeferred = function (b, a, c) {
        let d = window?.getDeferred?.(b);
        d
            ? d.promise.then(a)
            : c && ["complete", "interactive"].includes(document.readyState)
                ? setTimeout(a, 1)
                : c
                    ? document.addEventListener("DOMContentLoaded", a)
                    : console.error(`Deferred  does not exist`);
    };


{
  "@context" : {
    "@vocab" : "http://schema.org/"
  },
  "@type" : "ProfessionalService",
  "name" : "SpeakEasy English",
  "address" : {
    "@type" : "PostalAddress",
    "streetAddress" : "3 ulica Jana Sabały",
    "addressLocality" : "Zakopane",
    "addressRegion" : "Lesser Poland Voivodeship",
    "postalCode" : "34-500",
    "addressCountry" : "PL"
  },
  "geo" : {
    "@type" : "GeoCoordinates",
    "latitude" : "49.28767",
    "longitude" : "19.96652"
  },
  "url" : "https://www.speakeasyenglish.pl",
  "description" : "Speakeasy English oferuje kursy dla osób zupełnie początkujących, zarówno dzieci jak i dorosłych, a także dla osób uczących się do testów 8th Grade, matury, egzaminów Cambridge English i IELTS w grupach nie większych niż 5* studentów.",
  "telephone" : "698 143 534",
  "email" : "info@speakeasyenglish.pl",
  "logo" : "https://irp.cdn-website.com/f4b2f065/dms3rep/multi/favico.svg",
  "sameAs" : [ "https://facebook.com/Speakeasy-English-104955261451352/" ],
  "image" : [ "https://irp.cdn-website.com/f4b2f065/dms3rep/multi/127440843_106594307954114_1129909480361861556_n.jpg", "https://irp.cdn-website.com/f4b2f065/dms3rep/multi/127713379_106596321287246_4863723343614024217_n.jpg", "https://irp.cdn-website.com/f4b2f065/dms3rep/multi/127952327_106613847952160_4421884313957782800_n.jpg", "https://irp.cdn-website.com/f4b2f065/dms3rep/multi/127280262_106593621287516_40036625799689754_n.jpg", "https://irp.cdn-website.com/f4b2f065/dms3rep/multi/127440842_106599647953580_19146190925655553_n.jpg" ],
  "openingHoursSpecification" : [ {
    "@type" : "OpeningHoursSpecification",
    "dayOfWeek" : [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday" ],
    "opens" : "14:00",
    "closes" : "19:30"
  } ],
  "@id" : "https://www.speakeasyenglish.pl"
}
