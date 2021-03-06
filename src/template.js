export default function template(title, content = "", preloadedState) {
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <meta name="description" content="Hacker News is a community started by Paul Graham for sharing Anything that good
                hackers would find interesting. That includes more than hacking and startups. If you
                had to reduce it to a sentence, the answer might be: anything that gratifies one's
                intellectual curiosity.">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title> ${title} </title>
                <link href="/hackerNews/web/index.css" rel="stylesheet">
              </head>
              <body>
                <div class="content">
                   <div id="app" class="wrap-inner">
                      ${content}
                   </div>
                </div>
                <script>
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
                <script src="/hackerNews/web/index.js"> </script>
              </body>
              `;

  return page;
}
