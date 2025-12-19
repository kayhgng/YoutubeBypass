## YouTube Iran Bypass Pro 2025 - By Alikay_h

## توضیحات پروژه
این اسکریپت Tampermonkey با ترکیب **Proxy SwitchyOmega** به شما کمک می‌کند تا یوتیوب تشخیص نده که ویور از ایران هستید.  

## چرا این روش کار می‌کند؟
یوتیوب برای تشخیص کشور ویور از ترکیبی از موارد زیر استفاده می‌کند:
- IP
- Timezone
- Language مرورگر
- Canvas / WebGL Fingerprint
- Plugins و Fonts

این پروژه **IP** را با پراکسی تغییر می‌دهد و **Fingerprint** را با اسکریپت Tampermonkey فیک می‌کند.

## ابزارهای مورد نیاز

1. **Tampermonkey** (یا Violentmonkey)
   - لینک نصب: [https://www.tampermonkey.net/](https://www.tampermonkey.net/)

2. **Proxy SwitchyOmega** (افزونه کروم/فایرفاکس)
   - لینک نصب: [https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped?hl=en]https://chromewebstore.google.com/detail/proxy-switchyomega-3-zero/pfnededegaaopdmhkdmcofjmoldfiped?hl=en)

## مرحله ۱: تنظیم Proxy SwitchyOmega

1. افزونه Proxy SwitchyOmega را نصب کنید.
2. روی آیکون افزونه کلیک کنید → **Options**
3. یک پروفایل جدید بسازید (مثلاً "YouTube US")
   - Type: **HTTP** یا **SOCKS5**
   - Server: IP پراکسی
   - Port: پورت مربوطه
4. در بخش **Auto Switch**:
   - Mode را روی **Switch Rules** بگذارید
   - یک قانون اضافه کنید:
     - Condition Type: **Host Wildcard**
     - Pattern: `*youtube.com*`
     - Profile: "YouTube US"
5. ذخیره کنید.

### لیست پراکسی رایگان (هر چند ساعت چک کنید)
- [https://free-proxy-list.net](https://free-proxy-list.net)
- [https://proxyscrape.com/free-proxy-list](https://proxyscrape.com/free-proxy-list)
- [https://spys.one](https://spys.one)

> نکته: پراکسی‌های **Elite/Anonymous** و کشور **US/UK/DE** را انتخاب کنید.

## مرحله ۲: نصب اسکریپت Tampermonkey

1. Tampermonkey را باز کنید → **Create a new script**
2. تمام محتوای فایل YouTube Iran Bypass Pro 2025.js را کپی و در آنچا پیست کنید.
3. ذخیره کنید (Ctrl + S)

### نتیجه
با پراکسی US + این اسکریپت، یوتیوب ۹۰٪ فکر می‌کند ویور از آمریکا است.

### برنامه نویس
   ساخته شده توسط Alikay_h 

