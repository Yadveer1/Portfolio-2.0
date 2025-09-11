function Contact() {
    return(
        <div id="contact" className="h-230 lg:h-200 flex flex-col items-center justify-center bg-black mx-5 mb-10 md:mb-0">
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-2xl shadow-2xl p-10 max-w-lg w-full border border-purple-500/30">
                <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent mb-3">
                    Contact Me
                </h1>
                <p className="text-center text-gray-300 mb-10 text-lg">Let's connect and build something amazing together!</p>
                
                <div className="space-y-5">
                    {/* Email */}
                    <div className="group flex items-center space-x-5 p-5 bg-gradient-to-r from-purple-900/30 to-violet-900/30 rounded-xl hover:from-purple-800/40 hover:to-violet-800/40 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-purple-500/40">
                        <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-white text-lg mb-1">Email</h3>
                            <a href="mailto:yadveersinghpawar12345@gmail.com" 
                               className="text-purple-400 hover:text-purple-300 font-medium break-all transition-colors">
                                yadveersinghpawar12345@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* GitHub */}
                    <div className="group flex items-center space-x-5 p-5 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl hover:from-gray-100 hover:to-slate-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-200">
                        <div className="w-14 h-14 bg-gradient-to-r from-gray-800 to-black rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-800 text-lg mb-1">GitHub</h3>
                            <a href="https://github.com/Yadveer1" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                                github.com/Yadveer1
                            </a>
                        </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="group flex items-center space-x-5 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg border border-blue-200">
                        <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-800 text-lg mb-1">LinkedIn</h3>
                            <a href="https://www.linkedin.com/in/yadveersingh" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="text-blue-600 hover:text-blue-800 font-medium break-all transition-colors">
                                linkedin.com/in/yadveersingh
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;