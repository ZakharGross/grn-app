<?php

  class MyInstagramFeed 
  {
    
    function __construct($user_id, $access_token, $scope)
    {
      $this->user_id = $user_id;
      $this->access_token = $access_token;
      $this->scope = $scope;
    }

    /**
     *  Public function for get all photos from 
     *  your Instagram profile.
     */

    public function getAllPhotos()
    {

      $url = 'https://api.instagram.com/v1/users/' . $this->user_id . '/media/recent/?access_token=' . $this->access_token . '&count=33&scope=' . $this->scope;
      $cache = './' . sha1($url) . '.json';

      if (file_exists($cache) && filemtime($cache) <= time() - 900) {
        unlink($cache);
      }

      if (file_exists($cache)) {
        $jsonData = json_decode(file_get_contents($cache));
      } 
      else {
        $jsonData_source = json_decode(file_get_contents($url));

        while (isset($jsonData_source->pagination->next_url)) {
          $next_url = json_decode(file_get_contents($jsonData_source->pagination->next_url));
          $jsonData_source = (object) array_merge_recursive((array) $jsonData_source, (array) $next_url);
        }

        $jsonData = [];

        foreach ($jsonData_source->data as $key => $value) {
          $jsonData[$key] = new stdClass();
          $jsonData[$key]->created_time = $value->created_time;
          $jsonData[$key]->url = $value->images->low_resolution->url;
          $jsonData[$key]->caption = $value->caption->text;
        }

        file_put_contents($cache, json_encode($jsonData));
      }

      return $jsonData;

    }

    /**
     *  Public function for filter photos by hashtags 
     *  from all of your Instagram feed.
     */

    public function filterByTag($hashtag)
    {

      $filterData = [];

      foreach ($this->getAllPhotos() as $key => $value) {
        if (strpos($value->caption, $hashtag)) {
          $filterData[$key] = new stdClass();
          $filterData[$key]->created_time = $value->created_time;
          $filterData[$key]->url = $value->url;
          $filterData[$key]->caption = $value->caption;
        }
      }

      return $filterData;

    }
    
  }
