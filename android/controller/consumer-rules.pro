-keepattributes *Annotation*, Signature, InnerClasses, EnclosingMethod

-keep class com.google.gson.** { *; }
-dontwarn com.google.gson.**

-keep class tv.broadpeak.simid.controller.** { *; }
-keep class tv.broadpeak.simid.controller.SimidMessagesKt { *; }