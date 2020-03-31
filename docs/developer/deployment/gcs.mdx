---
title: Storing Files on Google Cloud Storage (GCS)
---

If you use containers for deployment (including Docker and Heroku), you should not store files within the container’s filesystem.

This integration allows you to delegate storing such files to [Google Cloud Storage (GCS) service](https://django-storages.readthedocs.io/en/latest/backends/gcloud.html).

## Environment Variables

| Variable Name                    | Description                                                                                                               |
|----------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| `GOOGLE_APPLICATION_CREDENTIALS` | Set an environment variable to a path of the json file.                                                                   |
| `GS_CREDENTIALS`                 | Optional. Use the OAuth 2 credentials for the connection. Default is to infer them from `GOOGLE_APPLICATION_CREDENTIALS`. |
| `GS_MEDIA_BUCKET_NAME`           | The GCS bucket name to use for media files.                                                                               |
| `GS_STORAGE_BUCKET_NAME`         | The GCS bucket name to use for static files.                                                                              |

## Serving Media Files from a GCS Bucket

"Media files" are the files uploaded through the dashboard. They include product images, category images, and non-image files.

If you want to use BGC to store and serve media files, you need to configure at least the bucket name (see table above).

## Serving Static Files from a GCS Bucket

"Static files" are assets required for Saleor to operate. They include assets used in default email templates.

If you also intend to use GCS for your static files, you need to configure at least the bucket name (see table above).

## Cross-Origin Resource Sharing

You need to configure your GCS bucket to allow cross-origin requests for some files to be properly served (SVG files, Javascript files, etc.). To do this, set the following instructions in your GCS bucket’s permissions tab under the [CORS section](https://cloud.google.com/storage/docs/xml-api/put-bucket-cors).

```xml
<?xml version="1.0" encoding="UTF-8"?>
<CorsConfig>
  <Cors>
    <Origins>
      <Origin>http://origin1.example.com</Origin>
      <Origin>http://origin2.example.com</Origin>
    </Origins>
    <Methods>
      <Method>GET</Method>
      <Method>HEAD</Method>
    </Methods>
    <ResponseHeaders>
      <ResponseHeader>Content-Type</ResponseHeader>
    </ResponseHeaders>
    <MaxAgeSec>3600</MaxAgeSec>
  </Cors>
</CorsConfig>
```
