// Download PDF Settlement Statements from Klarna's useless new website, when they refuse to give you API keys.
// Simply search for any range you want, then run this script in the console, and it will download each individual settlement statement as a PDF.
// Goodluck with bookkeeping!
async function get_pdf(parent_form) {
    return await fetch(parent_form.action, {
        "credentials": "include",
        "headers": {
            "User-Agent": window.navigator.userAgent,
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Accept-Language": window.navigator.languages.join()+"q="+1/window.navigator.languages.length,
            "Content-Type": "application/x-www-form-urlencoded",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "same-origin"
        },
        "referrer": parent_form.ownerDocument.URL,
        "body": parent_form.elements[0].name+"="+parent_form.elements[0].value+"&"+parent_form.elements[1].name+"="+parent_form.elements[1].value,
        "method": "POST",
        "mode": "cors"
    })
};

function download(blob, filename) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    // the filename you want
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }


async function download_pdfs() {
    var pdf_nodes = document.querySelectorAll('[value^="application/pdf"]');
    for (const node of pdf_nodes) {
        var parent_form = node.parentNode;
        fname = parent_form.action.split('/').pop()
        pdfurl = await get_pdf(parent_form);
        pdfurl.blob().then(blob => download(blob, fname+".pdf"));
      }
};

download_pdfs();