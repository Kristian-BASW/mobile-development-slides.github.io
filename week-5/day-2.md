---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: ./assets/dart.jpg

# some information about your slides (markdown enabled)
title: Dart introduction
info: |
  ##

# apply UnoCSS classes to the current slide
class: text-center
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# duration of the presentation
duration: 35min
---

<br><br><br><br><br><br><br><br><br><br><br><br>

## Mobile frameworks
## EASV
### Kristian Urup

<!-- <div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">
  Press Space for next page <carbon:arrow-right />
</div> -->
<!-- 
<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div> -->

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->


<!-- Test-->
---
transition: fade-out
---

### **Native**

<br>
<br>


|                 |             **iOS**       |       **Android**                   |
| --------------- | --------------------------| ----------------------------------- |
| **Language**    |    Swift (or ObjectiveC)  | Kotlin (or Java)                    |
| **Framework**   |       Cocoa Touch         | Android (Jetpack Compose)           |
| **Architecture**|           MVC             | Fragment, Adapter, ViewModel, Model |


<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/features/slide-scope-style
-->

<style>
* {
  background: black;
}
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->

---
transition: fade-out
level: 2
---

# Cross platform

<br><br><br>

<!-- #### Ionic (Angular based)
#### React Native
#### Flutter
#### .Net Maui -->

<div style="position:absolute; left: 50px; top: 110px;">
  <label class="img-label">React Native</label>
  <img src="./assets/react-native.svg" style="margin-top: 10px;" size="30" />
</div>

<div style="position:absolute; left: 50px; top: 320px;">
  <label class="img-label">Ionic (angular based)</label>
  <img src="./assets/ionic-logo.png" style="margin-top: 10px;width: 120px;" />
</div>

<div style="position:absolute; left: 550px; top: 110px;">
  <label class="img-label">.Net Maui</label>
  <img src="./assets/dotnet-maui.png" style="margin-top:30px;width: 200px;" />
</div>

<div style="position:absolute; left: 550px; top: 320px;">
  <label class="img-label">Flutter</label>
  <img src="./assets/flutter.png" style="margin-top: 10px;width: 120px;" />
</div>

<style>
  .img-label{
      font-size: 20px;
  }
</style>

---
transition: fade-out
---

# React

<table  style="position:absolute; right: 50px; top: 30px; width: 50%">

  <tbody> 
    <tr >
        <td style="text-align: end;font-size: bold">Release</td>
        <td>2015</td>
    </tr>
    <tr >
        <td style="text-align: end;font-size: bold">Language</td>
        <td>Javascript/Typescript</td>
    </tr>
    <tr >
        <td style="text-align: end;font-size: bold">UI</td>
        <td>Native</td>
    </tr>
  </tbody>

</table>
<br> <br><br> <br>

````md magic-move

```js 
import React from 'react';
import {Text, View} from 'react-native';

// Make the lambda function
const HelloWorldApp = () => {
  return ();
};
export default HelloWorldApp;
```
```js {7-9|all}
import React from 'react';
import {Text, View} from 'react-native';

// Implement the view with text
const HelloWorldApp = () => {
  return (
    <View>
      <Text>Hello, World!</Text>
    </View>
  );
};
export default HelloWorldApp;
```

```js {8-12|all}
import React from 'react';
import {Text, View} from 'react-native';

// Implement the style
const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>Hello, World!</Text>
    </View>
  );
};
export default HelloWorldApp;
```

````

<style>
  * {
    background: #222222;
  }
</style>

---
transition: fade-out
---

# Ionic

<table style="width: 50%; position:absolute;margin-top: -80px; top 0px; right: 50px;">

  <tbody> 
    <tr >
        <td style="text-align: end;font-size: bold">Release</td>
        <td>2013</td>
    </tr>
    <tr >
        <td style="text-align: end;font-size: bold">Language</td>
        <td>Javascript/Typescript</td>
    </tr>
    <tr >
        <td style="text-align: end;font-size: bold">UI</td>
        <td>WebView</td>
    </tr>
  </tbody>

</table>

<br><br><br>

````md magic-move


```js {all|3,8-14|4,18|5,15-17|all}
import {Component} from '@angular/core';

// Implementing the template
// Making the imports
// Implementing your own style
@Component({
  selector: 'app-tab1',
  template: `
  <ion-header>
    <ion-toolbar>
      <ion-title>Hello world tab</ion-title>
    </ion-toolbar>
  </ion-header>
  `,
  styles: [`ion-title {
  font-size: 100px;
  }`]
  imports: [IonToolbar, IonTitle, IonHeader],
})
```

````

<style>
  * {
    background: #222222;
  }
</style>

---
transition: fade-out
---

# .Net Maui 
## Previous called Xamarin 

<table style="width: 50%; position:absolute;margin-top: -130px; top 0px; right: 50px;">

  <tbody> 
    <tr>
        <td style="text-align: end;font-size: bold">Release</td>
        <td>2022 (2011)</td>
    </tr>
    <tr >
        <td style="text-align: end;font-size: bold">Language</td>
        <td>C#</td>
    </tr>
    <tr >
        <td style="text-align: end;font-size: bold">UI</td>
        <td>XAML</td>
    </tr>
  </tbody>

</table>

<br>

````md magic-move


```xml 
<?xml version="1.0" encoding="utf-8"?>
<ContentPage xlmns="http://schemas.microsoft.com/dotnet/2021/maui"
             xlmns:x="http://schemas.microsoft.com/winfx/2009/xaml"
             x:Class="Notes.Views.NotePage"
             Title="Note">
  <VerticalStackLayout Spacing="10" Margin="5">
    <TextEditor x:Name="TextEditor"
                Placeholder="Enter your note"
                Text="{Binding Text}"
                HeightRequest="100">
                <Grid ColumnDefinitions="*,*" ColumnSpacing="4">
                  <Button Text="Save"
                          Clicked="SaveButton_Clicked"/>
                  <Button Grid.Column="1"
                          Text="Delete"
                          Clicked="DeleteButton_Clicked"/>
                </Grid>
    </TextEditor>
  </VerticalStackLayout>
</ContentPage>

```

````

<style>
  * {
    background: #222222;
  }
</style>

---
transition: fade-out
---

## Most downloaded GitHub

<div style="position:absolute; left: 55px; top: 110px;">
  <img src="./assets/graph-most-used.png"  style="margin-top: 10px;width: 850px; height: 320px" size="30" />
</div>

<style>
  * {
    background: #222222;
  }
</style>

---
transition: fade-out
---



## Stack overflow trends

<div style="position:absolute; left: 55px; top: 110px;">
  <img src="./assets/stackoverflow-trends-chart.svg"  style="margin-top: 10px;width: 850px; height: 320px;background-color: white" size="30" />
</div>

<style>
  * {
    background: #222222;
  }
</style>

--- 
transition: fade-out
---

## Flutter
#### Platforms


<div style="position:absolute; left: 70px; top: 140px;">
  <img src="./assets/apple-logo.png"  size="40" />
</div>

<div style="position:absolute; left: 10px; top: 300px;">
  <img src="./assets/android-logo.png"  size="70" />
</div>

<div style="position:absolute; left: 350px; top: 140px;">
  <img src="./assets/windows-logo.png"  size="50" />
</div>


<div style="position:absolute; left: 365px; top: 360px;">
  <img src="./assets/linux-logo.png"  size="40" />
</div>


<div style="position:absolute; left: 670px; top: 160px;">
  <img src="./assets/web-logo.png"  size="40" />
</div>

<div style="position:absolute; left: 660px; top: 345px;">
  <img src="./assets/tv-logo.png"  size="50" />
</div>

---
transition: fade-out
---

# Flutter on tv
#### Android TV

<div style="position:absolute; left: 60px; top: 150px;">
  <img src="./assets/app-on-tv.jpg" style="width:600px" />
</div>