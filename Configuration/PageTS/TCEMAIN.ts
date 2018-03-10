#
# TCEMAIN
#
TCEMAIN {
    ### Set default permissions for Usergoups (default groupid = 1 - All Users)
    permissions {
        groupid = 1
        user = show, editcontent, edit, new, delete
        group = show, editcontent, edit, new, delete
        everybody =
    }

    table {
        tt_content {
            ### disable "copy 1"/"Kopie 1" if you copy contentelements
            disablePrependAtCopy = 1

            ### disable auto hide of copied contentelements
            disableHideAtCopy = 1
        }
    }
}
