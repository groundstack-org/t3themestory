mod {
    SHARED {
        ### set default language label and flag at the backend
        defaultLanguageFlag = de
        defaultLanguageLabel = deutsch
    }

    wizards.newContentElement.wizardItems.common.elements.textmedia.tt_content_defValues {
        ### Images: set default columns of images
        imagecols = 1

        ### Images: set default image position "left above"/"oben links"
        imageorient = 2

        ### Position: set default header position
        header_position = left
    }

    web_list.table {
        ################################################################
        ### Hide tx_news in list-view ###
        ################################################################
        tx_news_domain_model_link.hideTable = 1
        tx_news_domain_model_news.hideTable = 1
        tx_news_domain_model_news_related_mm.hideTable = 1
        tx_news_domain_model_news_tag_mm.hideTable = 1
        tx_news_domain_model_news_ttcontent_mm.hideTable = 1
        tx_news_domain_model_tag.hideTable = 1
    }
}
