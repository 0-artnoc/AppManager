(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{361:function(e,a,t){"use strict";t.r(a);var o=t(25),s=Object(o.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"app-details-page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-details-page"}},[e._v("#")]),e._v(" App Details Page")]),e._v(" "),t("p",[t("strong",[e._v("App Details")]),e._v(" page consists of 11 (eleven) tabs. It basically describes almost every bit of information an app can have including all attributes from app manifest, permissions, "),t("RouterLink",{attrs:{to:"/tech/AppOps.html"}},[e._v("app operations")]),e._v(", signing info, etc.")],1),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("Table of Contents")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#color-codes"}},[e._v("Color Codes")])]),t("li",[t("a",{attrs:{href:"#app-info-tab"}},[e._v("App Info Tab")]),t("ul",[t("li",[t("a",{attrs:{href:"#actions-in-app-info-tab"}},[e._v("Actions in App Info Tab")])])])]),t("li",[t("a",{attrs:{href:"#other-tabs"}},[e._v("Other Tabs")])])])]),t("p")]),e._v(" "),t("h2",{attrs:{id:"color-codes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#color-codes"}},[e._v("#")]),e._v(" Color Codes")]),e._v(" "),t("p",[e._v("List of background colors used in this page and their meaning:")]),e._v(" "),t("ul",[t("li",[t("code",{staticStyle:{"background-color":"#FF0000",color:"#000"}},[e._v("Red (day)")]),e._v(" or "),t("code",{staticStyle:{"background-color":"#790D0D",color:"#FFF"}},[e._v("dark red (night)")]),e._v(" - Any app op or permission that has the dangerous flag is marked as red. Components that are blocked within App Manager are also marked as red")]),e._v(" "),t("li",[t("code",{staticStyle:{"background-color":"#FF8A80",color:"#000"}},[e._v("Light red (day)")]),e._v(" or "),t("code",{staticStyle:{"background-color":"#4F1C14",color:"#FFF"}},[e._v("very dark red (night)")]),e._v(" - Components that are disabled outside App Manager have these colors. It should be noted that a component that is marked as disabled does not always mean that it is disabled by the user: It could be disabled by the system as well or marked as disabled in the app manifest. Also, all components of a disabled app are also considered disabled by the system (and by the App Manager as well)")]),e._v(" "),t("li",[t("code",{staticStyle:{"background-color":"#FF8017",color:"#000"}},[e._v("Vivid orange (day)")]),e._v(" or "),t("code",{staticStyle:{"background-color":"#FF8017",color:"#FFF"}},[e._v("very dark orange (night)")]),e._v(" - Tracker or ad components")]),e._v(" "),t("li",[t("code",{staticStyle:{"background-color":"#EA80FC",color:"#000"}},[e._v("Soft magenta (day)")]),e._v(" or "),t("code",{staticStyle:{"background-color":"#431C5D",color:"#FFF"}},[e._v("very dark violet (night)")]),e._v(" - Currently running services")])]),e._v(" "),t("h2",{attrs:{id:"app-info-tab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-info-tab"}},[e._v("#")]),e._v(" App Info Tab")]),e._v(" "),t("p",[t("strong",[e._v("App Info")]),e._v(" tab contains general information about the app such as "),t("em",[e._v("app directories")]),e._v(", "),t("em",[e._v("data directories")]),e._v(", "),t("em",[e._v("split apk info")]),e._v(", "),t("em",[e._v("sdk versions")]),e._v(", "),t("em",[e._v("install date")]),e._v(", "),t("em",[e._v("last update date")]),e._v(", "),t("em",[e._v("installer app")]),e._v(", "),t("em",[e._v("data usage")]),e._v(", "),t("em",[e._v("app size")]),e._v(", "),t("em",[e._v("data size")]),e._v(", "),t("em",[e._v("cache size")]),e._v(", "),t("em",[e._v("number of tracking components")]),e._v(" (some of these information require "),t("em",[e._v("Usage Access")]),e._v(" permission). Many actions can also be performed here which are described below.")]),e._v(" "),t("h3",{attrs:{id:"actions-in-app-info-tab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#actions-in-app-info-tab"}},[e._v("#")]),e._v(" Actions in App Info Tab")]),e._v(" "),t("p",[e._v("App Info tab has an horizontally-scrollable action panel where various actions are listed. Some actions are also available beside an info item such as paths and directories. Other actions are also avalable in the menu on the top-right corner. These actions include:")]),e._v(" "),t("ul",[t("li",[e._v("Launch/install/uninstall/update/enable/disable/force-stop (some operations require root or "),t("RouterLink",{attrs:{to:"/guide/adb-over-tcp.html"}},[e._v("ADB")]),e._v(")")],1),e._v(" "),t("li",[e._v("View app manifest")]),e._v(" "),t("li",[e._v("View or edit shared preferences - Clicking on a preference opens the "),t("strong",[e._v("Shared Preferences Editor")]),e._v(" page (requires root)")]),e._v(" "),t("li",[e._v("Scan for trackers using εxodus")]),e._v(" "),t("li",[e._v("Open paths and directories with external app")]),e._v(" "),t("li",[e._v("Delete app cache (root-only) or app data (root or "),t("RouterLink",{attrs:{to:"/guide/adb-over-tcp.html"}},[e._v("ADB")]),e._v(")")],1),e._v(" "),t("li",[e._v("Export blocking rules")]),e._v(" "),t("li",[e._v("Backup or restore an app along with its data")]),e._v(" "),t("li",[e._v("View app info in system settings")]),e._v(" "),t("li",[e._v("Open in F-Droid or Aurora Droid and Aurora Store (if installed)")]),e._v(" "),t("li",[e._v("Save or share the apk file as apk, or apks if the app is a bundled app")]),e._v(" "),t("li",[e._v("See the most honest "),t("strong",[e._v("What's New")]),e._v(" for apk files that needs update containing changes in application components and trackers, permission changes, etc.")])]),e._v(" "),t("h2",{attrs:{id:"other-tabs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#other-tabs"}},[e._v("#")]),e._v(" Other Tabs")]),e._v(" "),t("p",[e._v("Other tabs list application components such as activities, broadcast receivers, services,\nproviders as well as app operations (ie. app ops), permissions, features, configurations,\nshared libraries and signatures. Most of these information actually come from the\napplication manifest. The manifest has two kinds of permission tags, "),t("em",[e._v("permission")]),e._v(" and\n"),t("em",[e._v("uses-permission")]),e._v(", which is why there are two tabs for permissions in the window\n(named accordingly).")]),e._v(" "),t("p",[e._v("With root or "),t("RouterLink",{attrs:{to:"/guide/adb-over-tcp.html"}},[e._v("ADB")]),e._v(", any app op or any "),t("em",[e._v("dangerous")]),e._v(" permission can be granted or\nrevoked. With root, any app component (that is activities, broadcast receivers, services\nand providers) can also be blocked via intent firewall (for activities, receivers and\nservices) or (for providers,) using the "),t("em",[e._v("pm")]),e._v(" command line tool. There is a toggle\nbutton on the right side of each component item which can be used to block or unblock each\ncomponent, and there is a switch button next to each app op or permission item. By default,\nwhen components are blocked using the block buttons, they are not immediately applied. To\napply them, "),t("em",[e._v("Apply Rules")]),e._v(" option in the menu has to be used. Another option is to\nenable component blocking globally in the app settings. There is also an option to disable\nall tracker components in the menu as well as sorting by blocking components. In this latter\ncase and for app ops and permissions, the changes are applied immediately. Activities that\nare marked as "),t("em",[e._v("exported")]),e._v(" in the app manifest can be launched, or customizable launcher\nicons or shortcuts can be created in the "),t("em",[e._v("Activities")]),e._v(" tab. For app ops, there is an\noption to disable all dangerous app ops or reset them. For permissions, there is an option\nto revoke all dangerous permissions as well. Like components, both app ops and permissions\ncan be sorted in different ways.")],1)])}),[],!1,null,null,null);a.default=s.exports}}]);