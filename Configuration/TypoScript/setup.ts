######################
#### DEPENDENCIES ####
######################
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fluid_styled_content/Configuration/TypoScript/setup.ts">

################
#### HELPER ####
################


################
#### CONFIG ####
################
config {
    absRefPrefix = {$config.absRefPrefix}
    no_cache = {$config.no_cache}
    uniqueLinkVars = 1
    pageTitleFirst = 1
    linkVars = L
    prefixLocalAnchors = {$config.prefixLocalAnchors}
    renderCharset = utf-8
    metaCharset = utf-8
    doctype = html5
    removeDefaultJS = {$config.removeDefaultJS}
    inlineStyle2TempFile = 1
    admPanel = {$config.admPanel}
    debug = 0
    cache_period = 86400
    sendCacheHeaders = {$config.sendCacheHeaders}
    intTarget =
    extTarget =
    disablePrefixComment = 1
    index_enable = 1
    index_externals = 1
    index_metatags = 1
    headerComment = {$config.headerComment}

    // Disable Image Upscaling
    noScaleUp = 1

    // Compression and Concatenation of CSS and JS Files
    compressJs = 1
    compressCss = 1
    concatenateJs = 1
    concatenateCss = 1
}

[applicationContext = Development/Stage]
    config {
        debug = 1
        no_cache = 1
        compressCss = 0
        compressJs = 0
        concatenateCss = 0
        concatenateJs = 0
    }
[global]

[applicationContext = Development]
    config {
        debug = 1
        no_cache = 1
        compressCss = 0
        compressJs = 0
        concatenateCss = 0
        concatenateJs = 0
    }
[global]


##############
#### PAGE ####
##############
page = PAGE
page {
    typeNum = 0
    shortcutIcon = {$page.meta.shortcutIcon}

    10 = FLUIDTEMPLATE
    10 {
        format = html

        # Template names will be generated automaticly by converting the applied
        # backend_layout, there is no explicit mapping nessesary anymore.
        #
        # BackendLayout Key
        # subnavigation_right_2_columns -> SubnavigationRight2Columns.html
        #
        # Backend Record
        # uid: 1 -> 1.html
        #
        # Database Entry
        # value: -1 -> None.html
        # value: pagets__subnavigation_right_2_columns -> SubnavigationRight2Columns.html
        templateName = TEXT
        templateName {
            cObject = TEXT
            cObject {
                data = pagelayout
                required = 1
                case = uppercamelcase
                split {
                    token = pagets__
                    cObjNum = 1
                    1.current = 1
                }
            }
            ifEmpty = Default
        }

        templateRootPaths {
            0 = EXT:themestory/Resources/Private/Templates/Page/
            1 = {$page.fluidtemplate.templateRootPath}
        }
        partialRootPaths {
            0 = EXT:themestory/Resources/Private/Partials/Page/
            1 = {$page.fluidtemplate.partialRootPath}
        }
        layoutRootPaths {
            0 = EXT:themestory/Resources/Private/Layouts/Page/
            1 = {$page.fluidtemplate.layoutRootPath}
        }
    }

    meta {
        viewport = {$page.meta.viewport}
        robots = {$page.meta.robots}
        apple-mobile-web-app-capable = {$page.meta.apple-mobile-web-app-capable}

        title {
            noTrimWrap = |{$page.meta.beforeMetaTitle} | {$page.meta.afterMetaTitle}|
            data = field:title
            data.override = field:subtitle
            data.override.if.isTrue.field = subtitle
        }

        description.field = description
        description.ifEmpty {
            stdWrap {
                cObject = CONTENT
                cObject {
                    table = tt_content
                    select {
                        orderBy = sorting
                        where = colPos = 1
                        languageField = sys_language_uid
                        max = 2
                    }
                    renderObj = COA
                    renderObj {
                        10 = TEXT
                        10 {
                            doubleBrTag = .
                            required = 1
                            field = bodytext
                            stripHtml = 1
                            crop = 160 | ...
                            noTrimWrap = | ||
                        }
                    }
                }
            }
        }

        author = {$page.meta.author}
        author {
            override.field = author
        }

        keywords = {$page.meta.keywords}
        keywords {
            override.field = keywords
        }

        X-UA-Compatible = {$page.meta.compatible}
        X-UA-Compatible {
            attribute = http-equiv
        }

        # OpenGraph Tags
        og:title {
            attribute = property
            field = title
        }

        og:site_name {
            attribute = property
            data = TSFE:tmpl|setup|sitetitle
        }

        og:description {
            attribute = property
            field = description
        }
        og:description.ifEmpty {
            stdWrap {
                cObject = CONTENT
                cObject {
                    table = tt_content
                    select {
                        orderBy = sorting
                        where = colPos = 1
                        languageField = sys_language_uid
                        max = 2
                    }
                    renderObj = COA
                    renderObj {
                        10 = TEXT
                        10 {
                            doubleBrTag = .
                            required = 1
                            field = bodytext
                            stripHtml = 1
                            crop = 160 | ...
                            noTrimWrap = | ||
                        }
                    }
                }
            }
        }

        og:image {
            attribute = property
            stdWrap.cObject = FILES
            stdWrap.cObject {
                references {
                    data = levelfield:-1, media, slide
                }
                maxItems = 1
                renderObj = COA
                renderObj {
                    10 = IMG_RESOURCE
                    10 {
                        file {
                            import.data = file:current:uid
                            treatIdAsReference = 1
                            width = 1280c
                            height = 720c
                        }
                        stdWrap {
                            typolink {
                                parameter.data = TSFE:lastImgResourceInfo|3
                                returnLast = url
                                forceAbsoluteUrl = 1
                            }
                        }
                    }
                }
            }
        }
    }

    settings {

    }

    variables {

    }

    includeCSSLibs >
    includeCSS >
    includeJSLibs >
    includeJS >
    includeJSFooterlibs >
    includeJSFooter >


    includeCSSLibs {
        0010_font_awesome = EXT:t3themestory/Resources/Public/Css/font-awesome.min.css
    }

    includeCSS {
        0010_themestory_layout = EXT:t3themestory/Resources/Public/Css/main.min.css
    }

    includeJSLibs {

    }

    includeJS {

    }

    includeJSFooterlibs {

    }

    includeJSFooter {
        0010_themestory_scripts = EXT:t3themestory/Resources/Public/JavaScript/jquery.min.js
        0011_themestory_scripts = EXT:t3themestory/Resources/Public/JavaScript/jquery.scrollex.min.js
        0012_themestory_scripts = EXT:t3themestory/Resources/Public/JavaScript/jquery.scrolly.min.js
        0013_themestory_scripts = EXT:t3themestory/Resources/Public/JavaScript/skel.min.js
        0014_themestory_scripts = EXT:t3themestory/Resources/Public/JavaScript/util.js
        0015_themestory_scripts = EXT:t3themestory/Resources/Public/JavaScript/main.js
    }
}
