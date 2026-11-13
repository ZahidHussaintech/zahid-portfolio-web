import React from 'react';
import { AlertCircle, RotateCcw } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Handled Error Boundary Catch:', error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#060012] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center mb-4">
            <AlertCircle size={32} className="text-rose-500" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white mb-2">Something went wrong</h2>
          <p className="text-slate-400 text-sm max-w-md mb-6 leading-relaxed">
            The application encountered an unexpected runtime event, but the system prevented a crash.
          </p>
          <button
            onClick={this.handleReload}
            className="flex items-center gap-2 bg-[#FFE600] text-black font-extrabold px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-all hover:scale-105"
          >
            <RotateCcw size={14} /> Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}