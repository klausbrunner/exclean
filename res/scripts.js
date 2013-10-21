// javascript functions

/* toggle current visibility of metadata, remember in session cookie */
function toggleMetadataVisibility() {
  if(document.getElementById) {
    target = document.getElementById('metadata')
    if(target.style.visibility == 'visible') {
      target.style.visibility = 'hidden'
      location.href = '#'
      document.cookie = 'metadata=0';
    } 
    else {
      target.style.visibility = 'visible'
      location.href = '#metadata'
      document.cookie = 'metadata=1'
    }
  }
}

/* set metadata visibility according to session cookie (if any) */
function showMetadataAccordingToCookie() {
  if(document.getElementById && (document.cookie.length > 0)) {
    target = document.getElementById('metadata')
    if(document.cookie == 'metadata=1') {
      target.style.visibility = 'visible'
    }
    if(document.cookie == 'metadata=0') {
      target.style.visibility = 'hidden'
    }
  }
}
