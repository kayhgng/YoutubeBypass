// ==UserScript==
// @name         YouTube Iran Bypass Pro 2025 - By Alikay_h
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  دور زدن تشخیص ایران در یوتیوب برای افزایش RPM — ساخته شده توسط Alikay_h | گیت‌هاب: github.com/kayhgng 
// @author       Alikay_h
// @match        *://*.youtube.com/*
// @match        *://youtube.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    
    console.log("%cYouTube Iran Bypass Pro 2025 فعال شد!", "color: #39ff14; font-size: 20px; font-weight: bold;");
    console.log("%cساخته شده توسط Alikay_h", "color: #ff1966; font-size: 18px;");
    console.log("%cگیت‌هاب: github.com/kayhgng", "color: #58a6ff; font-size: 16px;");
    console.log("%cحالا RPM شما مثل ویور آمریکایی محاسبه می‌شود.", "color: #f0883e; font-size: 16px;");

    // فیک timezone US (Pacific Time - لس‌آنجلس)
    Object.defineProperty(Intl.DateTimeFormat.prototype, 'resolvedOptions', {
        value: () => ({ timeZone: 'America/Los_Angeles' }),
        writable: false,
        configurable: false
    });

    // فیک language
    Object.defineProperty(navigator, 'language', {
        get: () => 'en-US',
        configurable: false
    });
    Object.defineProperty(navigator, 'languages', {
        get: () => ['en-US', 'en'],
        configurable: false
    });

    // فیک canvas fingerprint (اضافه کردن نویز تصادفی)
    const originalGetContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function(type) {
        const ctx = originalGetContext.apply(this, arguments);
        if (type === '2d' && ctx) {
            const originalFillText = ctx.fillText;
            ctx.fillText = function(text, x, y, maxWidth) {
                const noise = String.fromCharCode(Math.floor(Math.random() * 50) + 1);
                return originalFillText.apply(this, [text + noise, x + Math.random() * 0.5, y + Math.random() * 0.5, maxWidth]);
            };
            const originalGetImageData = ctx.getImageData;
            ctx.getImageData = function(x, y, w, h) {
                const data = originalGetImageData.apply(this, arguments);
                for (let i = 0; i < data.data.length; i += 4) {
                    data.data[i] += Math.floor(Math.random() * 3) - 1; // نویز خیلی کم
                }
                return data;
            };
        }
        return ctx;
    };

    // فیک WebGL fingerprint (Vendor و Renderer)
    const getParameter = WebGLRenderingContext.prototype.getParameter;
    WebGLRenderingContext.prototype.getParameter = function(parameter) {
        if (parameter === 37445) return 'Intel Inc.'; // UNMASKED_VENDOR_WEBGL
        if (parameter === 37446) return 'Intel Iris OpenGL Engine'; // UNMASKED_RENDERER_WEBGL
        return getParameter.apply(this, arguments);
    };

    // فیک fonts (بعضی سایت‌ها چک می‌کنن)
    if (navigator.plugins && navigator.plugins.length === 0) {
        Object.defineProperty(navigator, 'plugins', {
            get: () => [{name: 'Chrome PDF Plugin'}, {name: 'Chrome PDF Viewer'}]
        });
    }

    console.log("%cتمام fingerprintها تغییر کرد — یوتیوب شما را کاربر آمریکایی تشخیص می‌دهد.", "color: #39ff14; font-size: 16px;");
})();
