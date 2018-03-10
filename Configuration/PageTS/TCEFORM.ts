#
# TCEFORM
#
TCEFORM {
    tt_content {
        ### START: tt_content disable fields
        CType {
            ### remove/disable contentelements
            removeItems (
                #text, textpic, image, bullets, table,
            )
        }
        rowDescription.types {
            textmedia.disabled = 0
            div.disabled = 0
            html.disabled = 0
            menu.disabled = 0
            shortcut.disabled = 0
            uploads.disabled = 0
        }
        linkToTop.types {
            textmedia.disabled = 0
            div.disabled = 0
            html.disabled = 0
            menu.disabled = 0
            shortcut.disabled = 0
            uploads.disabled = 0
        }
        sectionIndex.types {
            textmedia.disabled = 0
            div.disabled = 0
            html.disabled = 0
            menu.disabled = 0
            shortcut.disabled = 0
            uploads.disabled = 0
        }
        imageborder.types {
            textmedia.disabled = 0
        }
        spaceBefore.disabled = 0
        spaceAfter.disabled = 0
        space_before_class.disabled = 0
        space_after_class.disabled = 0
        frame_class.disabled = 0
        ### END: tt_content disable fields

        header_layout {
            removeItems = 0
            altLabels {
                1 = LLL:EXT:t3themestory/Resources/Private/Language/locallang_pageconfig.xlf:tceform.page.header1
                2 = LLL:EXT:t3themestory/Resources/Private/Language/locallang_pageconfig.xlf:tceform.page.header2
                3 = LLL:EXT:t3themestory/Resources/Private/Language/locallang_pageconfig.xlf:tceform.page.header3
                4 = LLL:EXT:t3themestory/Resources/Private/Language/locallang_pageconfig.xlf:tceform.page.header4
                5 = LLL:EXT:t3themestory/Resources/Private/Language/locallang_pageconfig.xlf:tceform.page.header5
            }
            addItems {
                6 = LLL:EXT:t3themestory/Resources/Private/Language/locallang_pageconfig.xlf:tceform.page.onlybold
            }
        }

        uploads_type {
            addItems {
            }
        }

        layout {
            removeItems = 1,2,3
            types {
                menu_subpages {
                    addItems {
                    }
                }
                textmedia {
                    addItems {
                        10 = Banner
                    }
                }
                gridelements_pi1 {
                    addItems {
                    }
                }
            }
        }
    }

    ### START: Im Backend Seiteneigenschaften Felder ausblenden
    pages {
        nav_title.disabled = 1
        subtitle.disabled = 0
        subtitle.label = LLL:EXT:t3themestory/Resources/Private/Language/locallang_db_pagets.xlf:tceform.pages.subtitle
        tx_realurl_pathsegment.disabled = 1
        keywords.disabled = 1
        abstract.disabled = 1
        layout {
            disabled = 0
            removeItems = 1,2,3
            altLabels {
            }
        }
        newUntil.disabled = 1
        content_from_pid.disabled = 1

        ### hide Backend Layout "keins / empty"
        backend_layout_next_level.removeItems= -1
        backend_layout.removeItems= -1
    }
    pages_language_overlay < TCEFORM.pages
    ### END: Im Backend Seiteneigenschaften Felder ausblenden
}
