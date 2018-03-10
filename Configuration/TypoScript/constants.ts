######################
#### DEPENDENCIES ####
######################
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fluid_styled_content/Configuration/TypoScript/constants.ts">

##############################
#### FLUID STYLED CONTENT ####
##############################
styles {
    templates {
        layoutRootPath = EXT:t3themestory/Resources/Private/Layouts/ContentElements/
        partialRootPath = EXT:t3themestory/Resources/Private/Partials/ContentElements/
        templateRootPath = EXT:t3themestory/Resources/Private/Templates/ContentElements/
    }
}

############
### PAGE ###
############
page {
     fluidtemplate {
        layoutRootPath =
        partialRootPath =
        templateRootPath =
    }

    meta {
        shortcutIcon = EXT:t3themestory/Resources/Public/Icons/favicon.ico

        author =
        keywords =
        viewport = initial-scale=1.0,maximum-scale=2.0,minimum-scale=1.0,user-scalable=yes,width=device-width
        robots = index,follow
        apple-mobile-web-app-capable = no
        compatible = IE=edge

        beforeMetaTitle =
        afterMetaTitle =
    }

    tracking {
        google {
            trackingID =
            anonymizeIp = 1
        }
    }
}

##############
### CONFIG ###
##############
config {
    no_cache = 0
    removeDefaultJS = 0
    admPanel = 1
    prefixLocalAnchors = all
    headerComment =
    sendCacheHeaders = 1
    absRefPrefix = auto
}
