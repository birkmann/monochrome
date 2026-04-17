export function rewriteUrl(url) {
    const map = window.__DEV_PROXY_MAP__;
    if (!map || typeof url !== 'string') return url;
    for (const prefix in map) {
        const target = map[prefix];
        if (url.startsWith(target)) {
            return window.location.origin + prefix + url.slice(target.length);
        }
    }
    return url;
}
