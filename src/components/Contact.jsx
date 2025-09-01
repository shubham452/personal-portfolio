import React, { useState } from "react";

export default function ContactLayout() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    return (
        <div className="flex min-h-screen bg-[#011627] text-white font-mono">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 bg-[#192734] border-r border-[#1e2d3d] p-3">
            <div className="flex items-center justify-center gap-6 mb-12">
            <div className="w-8 h-8 rounded-full bg-[#607b96]" />
            <div className="w-8 h-8 rounded-full bg-[#607b96]" />
            </div>
            {/* Contacts */}
            <div className="mb-8">
            <div className="text-[#a7c7e7] text-lg font-bold mb-2">contacts</div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[#abcbe0]">
                <span>📧</span>
                <span className="break-all">shubham.sk70@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-[#abcbe0]">
                <span>📞</span>
                <span>+91 9337910991</span>
                </div>
                <div className="flex items-center gap-2 bg-[#314560] p-1 rounded text-[#FFB454]">
                <span>📄</span>
                <span>contact-me.md</span>
                </div>
            </div>
            </div>
            {/* Socials */}
            <div>
            <div className="text-[#a7c7e7] text-lg font-bold mb-2">
                find-me-also-in
            </div>
            <div className="flex flex-col gap-2 text-[#7dd3fc]">
                <a
                href="https://github.com/shubham452"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white cursor-pointer"
                >
                <span>🔗</span>
                <span>GitHub</span>
                </a>
                <a
                href="https://leetcode.com/u/shubham_sk70/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white cursor-pointer"
                >
                <span>🔗</span>
                <span>LeetCode</span>
                </a>
                <a
                href="https://www.linkedin.com/in/shubham-kumar-224384183/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white cursor-pointer"
                >
                <span>🔗</span>
                <span>LinkedIn</span>
                </a>
            </div>
            </div>
        </aside>

        {/* Main Area */}
        <div className="flex flex-1 flex-col lg:flex-row">
            {/* Contact Form */}
            <div className="w-full lg:w-3/5 flex justify-center items-start bg-[#10243a] py-8 px-4 sm:px-8">
            <div className="w-full max-w-xl bg-[#162640] rounded-2xl shadow-xl p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-[#243650] pb-3 mb-5">
                <span className="text-lg text-[#7dd3fc] font-semibold">
                    contact-me.md
                </span>
                <button
                    type="button"
                    className="text-2xl text-[#607b96] hover:text-white"
                    aria-label="Close"
                >
                    ×
                </button>
                </div>
                <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                className="space-y-6"
                >
                <div>
                    <label className="block text-[#8ecae6] mb-2">_name:</label>
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded bg-[#243650] border border-[#314560] text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7dd3fc]"
                    placeholder="Your name"
                    />
                </div>
                <div>
                    <label className="block text-[#8ecae6] mb-2">_email:</label>
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded bg-[#243650] border border-[#314560] text-white px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7dd3fc]"
                    placeholder="your@email.com"
                    />
                </div>
                <div>
                    <label className="block text-[#8ecae6] mb-2">_message:</label>
                    <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded bg-[#243650] border border-[#314560] text-white px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#7dd3fc]"
                    placeholder="Your message here..."
                    />
                </div>
                <button
                    type="submit"
                    className="bg-[#1f364d] hover:bg-[#213d52] px-6 py-3 text-white rounded-lg font-semibold transition"
                >
                    Submit Message
                </button>
                </form>
            </div>
            </div>

            {/* Code Preview */}
            <div className="w-full lg:w-2/5 bg-[#10243a] flex justify-center items-start py-8 px-4 overflow-x-auto">
            <div className="w-full max-w-2xl bg-[#162640] rounded-2xl shadow-xl p-6 sm:p-8 flex">
                {/* Line Numbers */}
                <div className="pr-6 text-[#607b96] select-none text-right">
                {Array.from({ length: 9 }, (_, i) => (
                    <div key={i} className="h-6 leading-6">
                    {i + 1}
                    </div>
                ))}
                </div>
                {/* Code Content */}
                <div className="flex-1 font-mono text-sm sm:text-base leading-6 text-[#e1e7ef] overflow-x-auto">
                <div>
                    <span className="text-[#c792ea]">const</span>
                    <span className="text-[#82aaff]"> button</span>
                    <span className="text-white"> = </span>
                    <span className="text-[#82aaff]">document.querySelector</span>
                    <span className="text-white">(</span>
                    <span className="text-[#c3e88d]">'#sendBtn'</span>
                    <span className="text-white">);</span>
                </div>
                <div>
                    <span className="text-[#c792ea]">const</span>
                    <span className="text-[#82aaff]"> message</span>
                    <span className="text-white"> = {"{"}</span>
                </div>
                <div className="pl-8">
                    <span className="text-[#82aaff]">name:</span>{" "}
                    <span className="text-[#c3e88d]">"{name}"</span>,
                </div>
                <div className="pl-8">
                    <span className="text-[#82aaff]">email:</span>{" "}
                    <span className="text-[#c3e88d]">"{email}"</span>,
                </div>
                <div className="pl-8">
                    <span className="text-[#82aaff]">message:</span>{" "}
                    <span className="text-[#c3e88d]">"{message}"</span>,
                </div>
                <div>
                    <span className="text-white">{"}"}</span>
                </div>
                <div>
                    <span className="text-[#82aaff]">button.addEventListener</span>
                    <span className="text-white">(</span>
                    <span className="text-[#c3e88d]">'click'</span>
                    <span className="text-white">, () =&gt; {"{"}</span>
                </div>
                <div className="pl-8">
                    <span className="text-[#82aaff]">form.send</span>
                    <span className="text-white">(</span>
                    <span className="text-[#82aaff]">message</span>
                    <span className="text-white">);</span>
                </div>
                <div>
                    <span className="text-white">{"})"}</span>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}
