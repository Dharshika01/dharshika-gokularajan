<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet
    version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">

    <xsl:output method="html" encoding="UTF-8" indent="yes"/>

    <xsl:template match="/">

        <html>
        <head>
            <title>Dharshika | XML Sitemap</title>

            <style>
                body {
                    margin: 0;
                    padding: 40px 20px;
                    background: #f5f5fa;
                    font-family: Arial, sans-serif;
                    color: #1e293b;
                }

                .container {
                    max-width: 900px;
                    margin: auto;
                }

                .header {
                    background: linear-gradient(135deg, #6253c7, #9478e8);
                    color: white;
                    padding: 35px;
                    border-radius: 16px;
                    margin-bottom: 25px;
                }

                .header h1 {
                    margin: 0 0 12px;
                }

                .card {
                    background: white;
                    padding: 25px;
                    border-radius: 14px;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }

                th, td {
                    text-align: left;
                    padding: 16px;
                    border-bottom: 1px solid #e5e7eb;
                }

                th {
                    background: #f3f0ff;
                    color: #6253c7;
                }

                a {
                    color: #6253c7;
                    text-decoration: none;
                    overflow-wrap: anywhere;
                }

                a:hover {
                    text-decoration: underline;
                }

                .badge {
                    background: #dcfce7;
                    color: #166534;
                    padding: 6px 12px;
                    border-radius: 20px;
                    font-size: 12px;
                }

                .footer {
                    margin-top: 25px;
                    text-align: center;
                    color: #64748b;
                    font-size: 13px;
                }

                @media(max-width: 600px) {
                    body {
                        padding: 20px 12px;
                    }

                    .header, .card {
                        padding: 20px;
                    }

                    th, td {
                        padding: 10px;
                        font-size: 13px;
                    }
                }
            </style>
        </head>

        <body>
            <div class="container">

                <div class="header">
                    <h1>Dharshika's Portfolio Sitemap</h1>
                    <p>Explore the pages available on my website.</p>
                    <span class="badge">XML Sitemap</span>
                </div>

                <div class="card">
                    <h2>Website URLs</h2>

                    <table>
                        <tr>
                            <th>Page URL</th>
                            <th>Last Modified</th>
                        </tr>

                        <xsl:for-each select="s:urlset/s:url">
                            <tr>
                                <td>
                                    <a href="{s:loc}">
                                        <xsl:value-of select="s:loc"/>
                                    </a>
                                </td>

                                <td>
                                    <xsl:value-of select="s:lastmod"/>
                                </td>
                            </tr>
                        </xsl:for-each>

                    </table>
                </div>

                <div class="footer">
                    © 2026 Dharshika Gokularajan | Portfolio
                </div>

            </div>
        </body>
        </html>

    </xsl:template>

</xsl:stylesheet>
