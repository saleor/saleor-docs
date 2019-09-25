---
id: gcs
title: Storing Files on Google Cloud Storage (GCS)
---

If you are using containers for deployment (including Docker and Heroku), you should avoid storing files in the container’s volatile filesystem. 

This integration allows you to delegate storing such files to [Google Cloud Storage (GCS) service](https://django-storages.readthedocs.io/en/latest/backends/gcloud.html).


## Base configuration

* `GOOGLE_APPLICATION_CREDENTIALS` - Set an environment variable to a path of the json file.
* `GS_CREDENTIALS` - Optional. Use the OAuth 2 credentials for the connection. If unset, it reverts to the default inferred from the environment (i.e. `GOOGLE_APPLICATION_CREDENTIALS`).


## Serving media files with a GCS bucket

If you want to store and serve media files, set the following environment variable to use GCS as media bucket:

- `GS_MEDIA_BUCKET_NAME` - The GCS bucket name to use for media files.

> **Note**
>
> The media files are all data uploaded through the dashboard (product images, category images, etc.).


## Serving static files with a GCS bucket

By default, static files (such as CSS and JS files required to display your pages) will be served by the application server.

If you also intend to use GCS for your static files, set an additional environment variable:

- `GS_STORAGE_BUCKET_NAME` - The GCS bucket name to use for static files.

> **Note**
>
> You need to configure your GCS bucket to allow cross-origin requests for some files to be properly served (SVG files, Javascript files, etc.). To do this, set the following instructions in your GCS Bucket’s permissions tab under the [CORS section](https://cloud.google.com/storage/docs/xml-api/put-bucket-cors).
>
> ```xml
><?xml version="1.0" encoding="UTF-8"?>
><CorsConfig>
><Cors>
>    <Origins>
>       <Origin>http://origin1.example.com</Origin>
>       <Origin>http://origin2.example.com</Origin>
>    </Origins>
>    <Methods>
>        <Method>GET</Method>
>        <Method>HEAD</Method>
>        <Method>PUT</Method>
>        <Method>POST</Method>
>        <Method>DELETE</Method>
>     </Methods>
>     <ResponseHeaders>
>         <ResponseHeader>x-goog-meta-foo1</ResponseHeader>
>         <ResponseHeader>x-goog-meta-foo2</ResponseHeader>
>     </ResponseHeaders>
>     <MaxAgeSec>1800</MaxAgeSec>
></Cors>
></CorsConfig>