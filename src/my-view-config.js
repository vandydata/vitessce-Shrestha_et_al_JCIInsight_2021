export const myViewConfig = {
    "name": "Shrestha_et_al_JCIInsight_2021",
    "version": "1.0.4",
    "description": "",
    "datasets": [
          {
              "uid": "A", 
              "name": "Shrestha et al, JCI Insights 2021", 
              "files": [
                  {
                      "fileType": "anndata.zarr", 
                      "url": "https://cds-pancreatlas-public.s3.amazonaws.com/EShrestha_et_al_JCIInsight_2021.opt.ome.zarr/", 
                      "options": {
                          "obsEmbedding": [
                              {
                                  "path": "obsm/X_umap", 
                                  "dims": [0, 1], 
                                  "embeddingType": "UMAP"
                              }, 
                              {
                                  "path": "obsm/X_pca", 
                                  "dims": [0, 1],
                                  "embeddingType": "PCA"
                              }
                          ], 
                          "obsSets": [
                              {
                                  "name": "CellType", 
                                  "path": "obs/CellType"
                              }
                          ],
                          "obsFeatureMatrix": {
                              "path": "X"
                          }
                      }
                  }
              ]
          }
      ], 
      "coordinationSpace": {
          "dataset": {"A": "A"}, 
          "embeddingType": {"A": "UMAP"}
      }, 
      "layout": [
          {
              "component": "scatterplot", 
              "coordinationScopes": {
                  "dataset": "A", 
                  "embeddingType": "A"
              }, 
              "x": 0.0, 
              "y": 0.0, 
              "w": 8.0, 
              "h": 8.0
          }, 
          {
              "component": "obsSets", 
              "coordinationScopes": {
                  "dataset": "A"
              }, 
              "x": 8.0, 
              "y": 0.0, 
              "w": 4.0, 
              "h": 4.0
          }, 
          {
              "component": "featureList", 
              "coordinationScopes": {
                  "dataset": "A"
              }, 
              "x": 8.0, 
              "y": 4.0, 
              "w": 4.0, 
              "h": 4.0
          }, 
          {
              "component": "obsSetFeatureValueDistribution", 
              "coordinationScopes": {
                  "dataset": "A"
              }, 
              "x": 6.0, 
              "y": 8.0, 
              "w": 6.0, 
              "h": 4.0
          }, 
          {
              "component": "obsSetSizes", 
              "coordinationScopes": {
                  "dataset": "A"
              }, 
              "x": 0.0, 
              "y": 8.0, 
              "w": 6.0, 
              "h": 4.0
          }
      ], 
      "initStrategy": "auto"
  }         
